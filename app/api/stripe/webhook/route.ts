import { NextRequest, NextResponse } from 'next/server';

const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY);

// GHL API for fulfillment
const GHL_TOKEN = process.env.GHL_API_TOKEN || '';
const GHL_LOCATION = '3hM1yVflAe1LZ75pZJIs';

// Price ID → planId (covers site checkout AND Stripe payment links, which carry no metadata)
const PRICE_TO_PLAN: Record<string, { planId: string; planName: string }> = {
  price_1TvaI6AMjM6aPwDaP6kHqCy4: { planId: 'reputation-starter', planName: 'Reputation Starter' },
  price_1TvaIfAMjM6aPwDaHrkn1i5Q: { planId: 'reputation-growth', planName: 'Reputation Growth' },
  price_1TvaJ7AMjM6aPwDaE0EQSOF1: { planId: 'reputation-pro', planName: 'Reputation Pro' },
  price_1TvaJVAMjM6aPwDa7B8RqY2v: { planId: 'leadgen-starter', planName: 'Lead Generation Starter' },
  price_1TvaJqAMjM6aPwDa88Nr3SOA: { planId: 'leadgen-growth', planName: 'Lead Generation Growth' },
  price_1TvaKAAMjM6aPwDadaGsA4od: { planId: 'leadgen-pro', planName: 'Lead Generation Pro' },
  price_1U0OUBAMjM6aPwDaHQhysKzY: { planId: 'receptionist', planName: 'AI Receptionist' },
  price_1U0OnoAMjM6aPwDa0kTkYpKj: { planId: 'receptionist-pro', planName: 'AI Receptionist Full System' },
};

function deliveryTagsFor(planId: string): string[] {
  if (planId.startsWith('reputation')) return ['review-campaign-active'];
  if (planId.startsWith('leadgen')) return ['leadgen-client'];
  if (planId.startsWith('receptionist')) return ['receptionist-client'];
  return [];
}

export async function POST(request: NextRequest) {
  const sig = request.headers.get('stripe-signature');
  const webhookSecret = process.env.STRIPE_WEBHOOK_SECRET;

  if (!sig || !webhookSecret) {
    return NextResponse.json({ error: 'Missing signature or webhook secret' }, { status: 400 });
  }

  let event;
  try {
    const body = await request.text();
    event = stripe.webhooks.constructEvent(body, sig, webhookSecret);
  } catch (err: any) {
    console.error('Webhook signature verification failed:', err.message);
    return NextResponse.json({ error: err.message }, { status: 400 });
  }

  switch (event.type) {
    case 'checkout.session.completed': {
      const session = event.data.object;
      const metadata = session.metadata || {};
      const customerEmail = session.customer_details?.email || session.customer_email || '';
      const customerPhone = session.customer_details?.phone || '';

      // Resolve plan: metadata (site checkout) OR price ID from line items (payment links)
      let planId = metadata.planId || '';
      let planName = metadata.planName || '';
      if (!planId) {
        try {
          const full = await stripe.checkout.sessions.retrieve(session.id, { expand: ['line_items'] });
          const priceId = full.line_items?.data?.[0]?.price?.id || '';
          const plan = PRICE_TO_PLAN[priceId];
          if (plan) {
            planId = plan.planId;
            planName = plan.planName;
          } else {
            planName = full.line_items?.data?.[0]?.description || 'Unknown Plan';
          }
        } catch (err) {
          console.error('Line item lookup failed:', err);
        }
      }

      console.log(`✅ Payment completed: ${planName || 'unknown'} — ${customerEmail}`);

      if (GHL_TOKEN && customerEmail) {
        try {
          const deliveryTags = deliveryTagsFor(planId);
          // 'client' tag stops the assessment nurture (W3); 'paying-client' is the master flag
          const tags = ['paying-client', 'client', ...(planId ? [planId] : []), ...deliveryTags];
          console.log(`🎯 Tags for ${planId}: ${tags.join(', ')}`);

          const ghlBody = {
            locationId: GHL_LOCATION,
            email: customerEmail,
            phone: customerPhone,
            firstName: (metadata.customerName || '').split(' ')[0] || 'New',
            lastName: (metadata.customerName || '').split(' ').slice(1).join(' ') || 'Customer',
            companyName: metadata.businessName || '',
            tags,
            customFields: [
              { key: 'contact.plan', field_value: planName },
              { key: 'contact.stripe_customer_id', field_value: session.customer || '' },
            ],
          };

          const ghlRes = await fetch('https://services.leadconnectorhq.com/contacts/upsert', {
            method: 'POST',
            headers: {
              'Authorization': `Bearer ${GHL_TOKEN}`,
              'Content-Type': 'application/json',
              'Version': 'v3',
            },
            body: JSON.stringify(ghlBody),
          });
          if (!ghlRes.ok) {
            console.error('GHL upsert failed:', ghlRes.status, await ghlRes.text());
          }
        } catch (err) {
          console.error('GHL contact creation failed:', err);
        }
      }
      break;
    }

    case 'customer.subscription.updated': {
      const subscription = event.data.object;
      console.log(`🔄 Subscription updated: ${subscription.id} — status: ${subscription.status}`);
      break;
    }

    case 'customer.subscription.deleted': {
      const cancelled = event.data.object;
      console.log(`❌ Subscription cancelled: ${cancelled.id}`);
      // TODO: Remove tags from GHL contact, notify Robert
      break;
    }

    case 'invoice.paid': {
      const invoice = event.data.object;
      console.log(`💰 Invoice paid: ${invoice.id} — $${(invoice.amount_paid / 100).toFixed(2)}`);
      break;
    }
  }

  return NextResponse.json({ received: true });
}
