# SIMS INVESTMENT MANAGEMENT SERVICES, LLC
## Operational Business Plan — Digital Reputation & Lead Generation System

**Date:** July 21, 2026
**Author:** Robert Wallace
**Principal Office:** Paris, Texas
**Target Cities:** Sherman, Denison, Texarkana, Greenville, Rowlett, Rockwall, TX

---

## 1. EXECUTIVE SUMMARY

Sims Investment Management Services, LLC is an automated digital marketing agency serving Texas small businesses. We help local service businesses (HVAC, plumbing, electrical, roofing, contracting, and others) improve their online reputation and convert more leads through a fully automated system.

**Core Offering:** Google Review & Reputation Management
**Monthly Pricing:** $297 (Starter) | $697 (Growth) | $1,497 (Pro)
**Secondary Offering:** B2B Lead Generation ($297/$697/$1,497)

**Differentiator:** We deliver enterprise-quality digital audit reports (via ZoomInfo Revex) and full reputation management using AI agents — at a price small businesses can afford. No long contracts, month-to-month.

---

## 2. THE PROBLEM

Texas small service businesses share a common set of problems:

| Problem | Impact |
|---------|--------|
| Few Google reviews (< 20 avg.) | Lose 80% of calls to competitors |
| No review response strategy | Google penalizes unresponsive profiles |
| Inconsistent directory listings | Customers get wrong address/phone |
| No website analytics installed | Can't measure what works |
| Outdated Google Business Profiles | Missing photos, services, hours |
| Zero digital marketing knowledge | Don't know where to start |

**Our audit data:** Average business scores 28-40% across 6 categories of online presence.

---

## 3. SOLUTION ARCHITECTURE

### 3.1 The System Overview

```
┌─────────────────────────────────────────────────────────────────┐
│                   SIMS INVESTMENT AUTOMATION                      │
│                                                                   │
│  ┌──────────┐    ┌──────────┐    ┌──────────┐    ┌──────────┐  │
│  │  WING A  │    │  WING B  │    │  WING C  │    │  WING D  │  │
│  │Acquisition│    │Fulfillment│    │  Billing │    │  Content │  │
│  └──────────┘    └──────────┘    └──────────┘    └──────────┘  │
│        │               │               │               │         │
│        ▼               ▼               ▼               ▼         │
│  Find Leads      Deliver Service    Process Pay      SEO Blog   │
│                                                                   │
└─────────────────────────────────────────────────────────────────┘
```

### 3.2 Detailed Flow

```
                          LEAD FLOW
═══════════════════════════════════════════════════════════════════

  PROSPECT DISCOVERY
  ┌────────────────────────────────────────────┐
  │  ZoomInfo Revex / GHL Prospecting          │
  │  → Search by: Industry + City + Size       │
  │  → Generate 30+ audits per batch           │
  │  → Each audit scores 6 categories          │
  └─────────────────┬──────────────────────────┘
                    │
                    ▼
  CONTACT CREATION (AUTOMATED)
  ┌────────────────────────────────────────────┐
  │  Import Script (step2_import)              │
  │  → Creates GHL contact with:               │
  │    • Business name, phone, website          │
  │    • Audit score (custom field)             │
  │    • Audit report PDF URL (custom field)    │
  │  → Tags: "audit-campaign"                   │
  └─────────────────┬──────────────────────────┘
                    │
                    ▼
  EMAIL NURTURE (GHL WORKFLOW)
  ┌────────────────────────────────────────────┐
  │  Workflow triggers on "audit-campaign" tag  │
  │                                            │
  │  Email 1 (Day 0): "Your score is X%"       │
  │    → Full audit report PDF link             │
  │    → CTA: "See Our Plans"                   │
  │                                            │
  │  Email 2 (Day 3): "Did you see your score?"│
  │    → Score reminder + report link           │
  │    → CTA: "See Our Plans"                   │
  │                                            │
  │  Email 3 (Day 7): "What X% is costing you" │
  │    → Revenue impact of poor reputation      │
  │    → CTA: "See Our Plans"                   │
  │                                            │
  │  Email 4 (Day 14): "Final follow-up"       │
  │    → Last chance to use audit               │
  │    → CTA: "See Our Plans"                   │
  └─────────────────┬──────────────────────────┘
                    │
                    ▼
  PURCHASE (STRIPE CHECKOUT)
  ┌────────────────────────────────────────────┐
  │  Customer clicks "See Our Plans"            │
  │  → /reputation-pricing                      │
  │  → Picks a plan ($297/$697/$1,497)         │
  │  → BuyButton → Stripe Checkout              │
  │  → Enters payment info → Subscribes         │
  │  → Stripe sends receipt automatically       │
  │  → Success page with next steps             │
  └─────────────────┬──────────────────────────┘
                    │
                    ▼
  FULFILLMENT (AUTOMATED)
  ┌────────────────────────────────────────────┐
  │  Stripe Webhook fires:                      │
  │  → checkout.session.completed               │
  │  → Creates/updates GHL contact              │
  │  → Tags: "paying-client" + plan name        │
  │  → Custom fields: Plan, Stripe Customer ID  │
  │                                             │
  │  Monday Morning:                             │
  │  → Review Monitor checks all clients' GBP   │
  │  → Alerts if new reviews detected            │
  │  → Review Responder generates replies        │
  │                                             │
  │  Monthly:                                    │
  │  → Reputation score report generated         │
  │  → Sent to client                            │
  └────────────────────────────────────────────┘


                        SALES FUNNEL
═══════════════════════════════════════════════════════════════════

  Top of Funnel (Awareness)
  ┌────────────────────────────────────────────┐
  │  Blog Posts (weekly, SEO-optimized)         │
  │  → "Why Your Google Score Matters"          │
  │  → "90% of Customers Check Reviews"         │
  │  → City-specific posts (Sherman, Paris)     │
  │  → All link to /free-audit or /pricing      │
  │                                             │
  │  Website Form (/free-audit)                  │
  │  → Captures name, email, business            │
  │  → Creates GHL contact + tags                │
  └─────────────────┬──────────────────────────┘
                    │
                    ▼
  Middle of Funnel (Consideration)
  ┌────────────────────────────────────────────┐
  │  4-Email Nurture Sequence (see above)       │
  │  → Delivers audit report                     │
  │  → Builds urgency                            │
  │  → Positions solution                        │
  └─────────────────┬──────────────────────────┘
                    │
                    ▼
  Bottom of Funnel (Conversion)
  ┌────────────────────────────────────────────┐
  │  /reputation-pricing page                   │
  │  → 3 clear plans with features              │
  │  → Buy buttons → Stripe Checkout            │
  │  → No sales calls needed (self-serve)        │
  └────────────────────────────────────────────┘


                    WEBSITE MAP
═══════════════════════════════════════════════════════════════════

  simsinvestments777.com
  ├── /                   Home page
  ├── /services           Service descriptions
  ├── /pricing            Lead generation pricing (existing)
  ├── /reputation-pricing Reputation management pricing
  ├── /free-audit         Sign up for free audit
  ├── /blog               Blog index
  │   └── /[slug]         Individual blog posts
  ├── /checkout/success   Post-purchase thank you
  └── /api
      ├── /leads          Website form → GHL
      ├── /stripe
      │   ├── /checkout   Create Stripe session
      │   └── /webhook    Handle Stripe events
      └── /...            (future endpoints)

```

---

## 4. AGENTS & SYSTEMS (Employees)

### Agent 1: Lead Finder (Wing A)
**Role:** Prospecting & Discovery
**Tools:** ZoomInfo Revex (GHL Prospecting), manual search
**Output:** List of 15-30 businesses per search with audit reports
**Schedule:** As-needed batches (can be weekly)
**Status:** ✅ Active — 31 HVAC prospects imported

### Agent 2: Import Manager (Wing A)
**Role:** Creates GHL contacts automatically
**Script:** `step2_import_contacts.py`
**Output:** Contact in GHL with: name, phone, email, audit score, report URL, tags
**Schedule:** Runs after each Lead Finder batch
**Status:** ✅ Active

### Agent 3: Email Nurture (Wing A)
**Role:** 4-email sequence via GHL workflow
**Trigger:** "audit-campaign" tag added to contact
**Output:** 4 automated emails over 14 days
**Status:** ✅ Published

### Agent 4: Stripe Checkout (Wing C)
**Role:** Processes payments
**Script:** `/api/stripe/checkout` (Next.js API route)
**Output:** Stripe Checkout session → payment → receipt → webhook
**Plans:** 6 products (3 reputation, 3 lead gen)
**Status:** ✅ Built — needs webhook secret on Vercel

### Agent 5: Fulfillment Webhook (Wing B / C)
**Role:** Handles post-purchase actions
**Script:** `/api/stripe/webhook` (Next.js API route)
**Output:** Creates GHL contact for new customer, tags as "paying-client"
**Events handled:** checkout.completed, subscription.updated, subscription.deleted, invoice.paid
**Status:** ✅ Built

### Agent 6: Review Monitor (Wing B)
**Role:** Checks Google Business Profiles daily for new reviews
**Script:** `review_monitor.py`
**Output:** Detects new reviews, tracks rating changes, monitors reply rate
**Schedule:** Daily (manual or cron)
**Status:** ✅ Built

### Agent 7: Review Responder (Wing B)
**Role:** Generates AI replies to Google reviews
**Script:** `review_responder.py`
**Output:** Professional, context-aware responses to positive, neutral, and negative reviews
**Status:** ✅ Built

### Agent 8: Audit Generator (Wing B)
**Role:** Generates comprehensive digital audit reports
**Script:** `audit_agent.py`
**Output:** Scores 6 categories: Business Details, Tech Stack, GBP, Listings, Reputation, Overall
**Status:** ✅ Built

### Agent 9: Blog Content Agent (Wing D)
**Role:** Writes and publishes SEO-optimized blog posts
**Script:** `blog_agent.py`
**Output:** MDX blog posts with keyword targeting, pushed to GitHub → Vercel
**Schedule:** Weekly (Monday 9 AM, cron job)
**Status:** ✅ Active — 10 topics queued, 3 published

### Agent 10: SEO Monitor (Wing D)
**Role:** Tracks keyword rankings and site performance
**Script:** `seo_monitor.py`
**Output:** Monthly ranking reports
**Schedule:** Monthly
**Status:** ✅ Built

### Agent 11: Lead Webhook (Wing A)
**Role:** Website form → GHL contact creation
**Script:** `lead_webhook.py` (runs on port 8080)
**Also:** `/api/leads` on website (direct GHL API call)
**Status:** ✅ Running

---

## 5. TECHNOLOGY STACK

| Component | Technology | Purpose |
|-----------|-----------|---------|
| CRM | GHL (GoHighLevel) | Contact management, email workflows, tags |
| Payments | Stripe | Subscription billing, receipts, webhooks |
| Website | Next.js 15 (Vercel) | Landing pages, pricing, blog, API routes |
| Audits | ZoomInfo Revex / Google Places API | Automated business analysis |
| AI Responses | Google Gemini (via review responder) | AI-generated review replies |
| Content | Custom Python blog agent | SEO blog post generation |
| Automation | Hermes cron jobs | Weekly publishing, monitoring |
| Email | GHL built-in | Transactional emails via workflow |
| DNS | Cloudflare (Vercel proxy) | Domain management |
| Repo | GitHub | Code deployment (Vercel auto-deploy) |

---

## 6. OPERATIONAL PROCESSES

### 6.1 Weekly Lead Generation Cycle

**Monday:**
- Blog agent publishes new post (9 AM, automated)
- Check ZoomInfo Revex for new businesses in target cities

**Monday-Friday:**
- Run Lead Finder for new cities or industries
- Import new prospects into GHL with audit scores
- Workflow fires automatically

**Ongoing:**
- Review Monitor checks all active clients daily
- New reviews trigger response generation
- Monthly reports sent to paying clients

### 6.2 Client Onboarding (Automated)

```
Prospect discovered → Audit generated → Imported to GHL →
4-email sequence → Clicks pricing → Buys plan →
Stripe receipt → Webhook creates client record →
Review Monitor starts → First report in 7 days
```

### 6.3 Client Retention

- **Weekly:** Review monitoring & alerts
- **Monthly:** Reputation score report
- **Quarterly:** Full re-audit (progress tracking)
- **At-risk detection:** Canceled subscription → notification

---

## 7. PRICING & SERVICES

### Reputation Management (New)

| Plan | Price | Features |
|------|-------|----------|
| **Starter** | $297/mo | Review generation, GBP optimization, AI review responses, weekly monitoring, monthly report |
| **Growth** | $697/mo | Everything in Starter + directory listing cleanup, tech stack setup (Analytics/Pixel/GTM), competitor tracking, phone support |
| **Pro** | $1,497/mo | Everything in Growth + AI phone agent, custom landing page, lead gen add-on included, real-time dashboard, priority support |

### Lead Generation (Existing)

| Plan | Price | Features |
|------|-------|----------|
| **Starter** | $297/mo | 50 qualified B2B leads/month, prospect research, email outreach, weekly reports |
| **Growth** | $697/mo | 100 leads/month, LinkedIn outreach, review generation, pipeline + review reports |
| **Pro** | $1,497/mo | 200+ leads/month, phone outreach, comprehensive review management, priority support |

### Add-Ons

| Service | Price |
|---------|-------|
| AI Phone Agent | $397/mo |
| Google Ads Management | $397/mo |
| Competitor Analysis | $149/mo |
| Content Marketing | $497/mo |

---

## 8. TARGET MARKETS

### Phase 1 (Current) — Sherman/Denison Area
- **Vertical:** HVAC (31 prospects imported)
- **Cities:** Sherman, Denison
- **Next:** Plumbers, electricians in same cities

### Phase 2 (Next 30 Days)
- **Vertical:** Home services (all trades)
- **Cities:** Texarkana, Greenville
- **Goal:** 100+ prospects in GHL

### Phase 3 (60 Days)
- **Vertical:** Professional services (dental, medical, legal)
- **Cities:** Rowlett, Rockwall (DFW metro)
- **Goal:** 200+ prospects

---

## 9. KEY METRICS & KPIs

| Metric | Target | Current |
|--------|--------|---------|
| Prospects in pipeline | 200+ | 31 |
| Email open rate | 40%+ | — |
| Email click rate | 5%+ | — |
| Conversion rate (audit → purchase) | 5-10% | 0 (just launched) |
| Monthly recurring revenue (MRR) | $10k/mo | $0 |
| Blog posts published | 2-3/week | 3 |
| Keywords ranking | 10+ in top 30 | 0 (new site) |
| Client retention | 80%+ at 6 months | — |

---

## 10. SYSTEM DIAGRAM (Flow Chart)

```
    ┌─────────────────────────────────────────────────────────────┐
    │                    INPUT CHANNELS                            │
    │  ┌──────────────┐  ┌──────────────┐  ┌──────────────────┐  │
    │  │ ZoomInfo     │  │ Website Form  │  │ Referral / Manual │  │
    │  │ Revex Audits │  │ /free-audit   │  │ Import            │  │
    │  └──────┬───────┘  └──────┬───────┘  └────────┬─────────┘  │
    └─────────┼──────────────────┼───────────────────┼─────────────┘
              │                  │                   │
              ▼                  ▼                   ▼
    ┌─────────────────────────────────────────────────────────────┐
    │                  GHL CRM (Central Hub)                       │
    │                                                               │
    │  ┌──────────────┐    ┌──────────────┐    ┌──────────────┐  │
    │  │  Contacts    │───▶│  Workflow    │───▶│  Emails Sent │  │
    │  │  (leads)     │    │  (published) │    │  (4-sequence) │  │
    │  └──────────────┘    └──────────────┘    └──────────────┘  │
    │         │                                                   │
    │         ▼                                                   │
    │  ┌──────────────┐                                           │
    │  │  Tags Applied │                                           │
    │  │  audit-campaign                                           │
    │  │  paying-client                                            │
    │  │  website-lead                                             │
    │  └──────────────┘                                           │
    └──────────────────┬──────────────────────────────────────────┘
                       │
                       ▼
    ┌─────────────────────────────────────────────────────────────┐
    │              PURCHASE FLOW (Stripe)                          │
    │                                                               │
    │  CTA in email ──▶ /reputation-pricing ──▶ BuyButton          │
    │                                              │               │
    │                                              ▼               │
    │  ┌──────────────┐    ┌──────────────┐    ┌──────────────┐  │
    │  │ Stripe       │───▶│ Receipt      │───▶│ Webhook      │  │
    │  │ Checkout     │    │ (auto-sent)  │    │ → GHL create │  │
    │  └──────────────┘    └──────────────┘    └──────────────┘  │
    └─────────────────────────────────────────────────────────────┘
                       │
                       ▼
    ┌─────────────────────────────────────────────────────────────┐
    │                  FULFILLMENT AGENTS                           │
    │                                                               │
    │  ┌────────────────────────────────────────────────────────┐  │
    │  │  DAILY (automated)                                      │  │
    │  │  ┌──────────────┐    ┌──────────────┐                  │  │
    │  │  │ Review       │───▶│ Review       │                  │  │
    │  │  │ Monitor      │    │ Responder    │                  │  │
    │  │  └──────────────┘    └──────────────┘                  │  │
    │  │                                                         │  │
    │  │  WEEKLY (automated)                                     │  │
    │  │  ┌──────────────┐    ┌──────────────┐                  │  │
    │  │  │ Blog Agent   │───▶│ Deploy to    │                  │  │
    │  │  │ (new post)   │    │ Vercel       │                  │  │
    │  │  └──────────────┘    └──────────────┘                  │  │
    │  │                                                         │  │
    │  │  MONTHLY (automated)                                    │  │
    │  │  ┌──────────────┐    ┌──────────────┐                  │  │
    │  │  │ Reputation   │───▶│ Send to      │                  │  │
    │  │  │ Score Report │    │ Client       │                  │  │
    │  │  └──────────────┘    └──────────────┘                  │  │
    │  └────────────────────────────────────────────────────────┘  │
    └─────────────────────────────────────────────────────────────┘
```

---

## 11. IMMEDIATE ACTION ITEMS

| Priority | Task | Owner | Status |
|----------|------|-------|--------|
| 1 | Add STRIPE_WEBHOOK_SECRET to Vercel env vars | Robert | ⏳ Pending |
| 2 | Set GHL_API_TOKEN on Vercel env vars | Robert | ⏳ Pending |
| 3 | Update email CTAs in GHL workflow AI builder | Robert | ⏳ Pending |
| 4 | Generate next city batch (Denison, Texarkana) | Robert + Hermes | Upcoming |
| 5 | Add plumbers/electricians to Lead Finder | Robert + Hermes | Upcoming |

---

*Document generated by Hermes Agent (Nous Research) — July 21, 2026*
*Sims Investment Management Services, LLC — Paris, Texas*
