// Test Stripe connectivity using the site's own stripe package + .env.local (no secrets in shell)
const fs = require('fs');
const path = require('path');

// minimal .env.local parser
const env = {};
for (const line of fs.readFileSync('/home/ubuntu/sims-website/.env.local', 'utf8').split('\n')) {
  const m = line.match(/^([A-Z_]+)=(.*)$/);
  if (m) env[m[1]] = m[2].replace(/^["']|["']$/g, '');
}

const stripe = require('stripe')(env.STRIPE_SECRET_KEY);

stripe.products.list({ limit: 30 })
  .then(products => {
    console.log(`CONNECTED. ${products.data.length} products:`);
    for (const p of products.data) {
      console.log(`  ${p.id} | ${p.name}`);
    }
  })
  .catch(e => console.log('ERR:', e.message));
