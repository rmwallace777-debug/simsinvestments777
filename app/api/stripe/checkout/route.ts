import { NextRequest, NextResponse } from 'next/server';

const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY);

// Plan IDs mapping — Robert creates these in Stripe Dashboard
const PLANS: Record<string, { price_id: string; name: string }> = {
  'reputation-starter': {
    price_id: 'price_1TvaI6AMjM6aPwDaP6kHqCy4',
    name: 'Reputation Starter',
  },
  'reputation-growth': {
    price_id: 'price_1TvaIfAMjM6aPwDaHrkn1i5Q',
    name: 'Reputation Growth',
  },
  'reputation-pro': {
    price_id: 'price_1TvaJ7AMjM6aPwDaE0EQSOF1',
    name: 'Reputation Pro',
  },
  'leadgen-starter': {
    price_id: 'price_1TvaJVAMjM6aPwDa7B8RqY2v',
    name: 'Lead Generation Starter',
  },
  'leadgen-growth': {
    price_id: 'price_1TvaJqAMjM6aPwDa88Nr3SOA',
    name: 'Lead Generation Growth',
  },
  'leadgen-pro': {
    price_id: 'price_1TvaKAAMjM6aPwDadaGsA4od',
    name: 'Lead Generation Pro',
  },
};

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { planId, customerEmail, customerName, businessName } = body;

    if (!planId || !PLANS[planId]) {
      return NextResponse.json({ error: 'Invalid plan' }, { status: 400 });
    }

    const plan = PLANS[planId];
    const origin = request.headers.get('origin') || 'https://simsinvestments777.com';

    // Create Stripe checkout session
    const session = await stripe.checkout.sessions.create({
      mode: 'subscription',
      payment_method_types: ['card'],
      line_items: [
        {
          price: plan.price_id,
          quantity: 1,
        },
      ],
      customer_email: customerEmail,
      metadata: {
        planId,
        planName: plan.name,
        customerName: customerName || '',
        businessName: businessName || '',
      },
      success_url: `${origin}/checkout/success?session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: `${origin}/reputation-pricing?cancelled=true`,
    });

    return NextResponse.json({ url: session.url });
  } catch (error: any) {
    console.error('Stripe checkout error:', error);
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
// force redeploy Tue Jul 21 10:55:04 UTC 2026
