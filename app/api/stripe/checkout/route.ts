import { NextRequest, NextResponse } from 'next/server';

const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY);

// Plan IDs mapping — Robert creates these in Stripe Dashboard
const PLANS: Record<string, { price_id: string; name: string; amount: number }> = {
  'reputation-starter': {
    price_id: 'price_placeholder_starter',
    name: 'Reputation Starter',
    amount: 29700,
  },
  'reputation-growth': {
    price_id: 'price_placeholder_growth',
    name: 'Reputation Growth',
    amount: 69700,
  },
  'reputation-pro': {
    price_id: 'price_placeholder_pro',
    name: 'Reputation Pro',
    amount: 149700,
  },
  'leadgen-starter': {
    price_id: 'price_placeholder_leadgen_starter',
    name: 'Lead Generation Starter',
    amount: 29700,
  },
  'leadgen-growth': {
    price_id: 'price_placeholder_leadgen_growth',
    name: 'Lead Generation Growth',
    amount: 69700,
  },
  'leadgen-pro': {
    price_id: 'price_placeholder_leadgen_pro',
    name: 'Lead Generation Pro',
    amount: 149700,
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
          price_data: {
            currency: 'usd',
            product_data: {
              name: plan.name,
              description: `${plan.name} — Monthly Subscription`,
            },
            unit_amount: plan.amount,
            recurring: { interval: 'month' },
          },
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
