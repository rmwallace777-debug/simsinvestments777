// Create Website Build + Care products in Stripe (run with: node scripts/stripe_create_website.js)
// Reads STRIPE_SECRET_KEY from .env.local — no secrets in shell.
const fs = require('fs');

const env = {};
for (const line of fs.readFileSync('/home/ubuntu/sims-website/.env.local', 'utf8').split('\n')) {
  const m = line.match(/^([A-Z_]+)=(.*)$/);
  if (m) env[m[1]] = m[2].replace(/^["']|["']$/g, '');
}

const stripe = require('stripe')(env.STRIPE_SECRET_KEY);

async function main() {
  // 1. Website Build (Site-in-a-Day) — one-time $1,250
  const build = await stripe.products.create({
    name: 'Website Build (Site-in-a-Day)',
    description: 'Professional 5-page website built and live in 24 hours. One-time setup fee.',
    metadata: { plan: 'website-build', service: 'website' },
  });
  const buildPrice = await stripe.prices.create({
    product: build.id,
    unit_amount: 125000,
    currency: 'usd',
    metadata: { plan: 'website-build' },
  });

  // 2. Website Care & Hosting — $119/mo subscription
  const care = await stripe.products.create({
    name: 'Website Care & Hosting',
    description: 'Ongoing care: hosting, security, backups, monthly updates and support.',
    metadata: { plan: 'website-care', service: 'website' },
  });
  const carePrice = await stripe.prices.create({
    product: care.id,
    unit_amount: 11900,
    currency: 'usd',
    recurring: { interval: 'month' },
    metadata: { plan: 'website-care' },
  });

  console.log('✅ Website Build product:', build.id, '| price:', buildPrice.id);
  console.log('✅ Website Care product: ', care.id, '| price:', carePrice.id);
  console.log('\nPASTE THESE INTO THE CODE:');
  console.log(`  checkout route  'website-build': price_id: '${buildPrice.id}'`);
  console.log(`  checkout route  'website-care':  price_id: '${carePrice.id}'`);
  console.log(`  webhook route   price_TODO_WEBSITE_BUILD -> '${buildPrice.id}'`);
  console.log(`  webhook route   price_TODO_WEBSITE_CARE  -> '${carePrice.id}'`);
}

main().catch(e => console.log('ERR:', e.message));
