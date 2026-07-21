import { NextRequest, NextResponse } from 'next/server';

const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY);

// GHL API for fulfillment
const GHL_TOKEN = process.env.GHL_API_TOKEN || '';
const GHL_LOCATION = '3hM1yVflAe1LZ75pZJIs';

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

  // Handle the event
  switch (event.type) {
    case 'checkout.session.completed': {
      const session = event.data.object;
      const metadata = session.metadata || {};
      const customerEmail = session.customer_details?.email || session.customer_email || '';

      console.log(`✅ Payment completed: ${metadata.planName} — ${customerEmail}`);

      // Create/update contact in GHL
      if (GHL_TOKEN && customerEmail) {
        try {
          const ghlBody = {
            locationId: GHL_LOCATION,
            email: customerEmail,
            firstName: (metadata.customerName || '').split(' ')[0] || 'New',
            lastName: (metadata.customerName || '').split(' ').slice(1).join(' ') || 'Customer',
            companyName: metadata.businessName || '',
            tags: ['paying-client', metadata.planId || ''],
            customFields: [
              { key: 'contact.plan', field_value: metadata.planName || '' },
              { key: 'contact.stripe_customer_id', field_value: session.customer || '' },
            ],
          };

          await fetch('https://services.leadconnectorhq.com/contacts/upsert', {
            method: 'POST',
            headers: {
              'Authorization': `Bearer ${GHL_TOKEN}`,
              'Content-Type': 'application/json',
              'Version': 'v3',
            },
            body: JSON.stringify(ghlBody),
          });
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
