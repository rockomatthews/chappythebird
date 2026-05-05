# Stripe checkout — one-time setup

LemonSqueezy was deprecated 2026-05-05. The tip jar uses Stripe Payment Links instead. The site code is already wired — it reads four env vars and renders disabled "Setting up checkout" buttons until they're set. To go live: create the four Payment Links and paste the URLs into Vercel.

## What to create in the Stripe dashboard

Stripe → Products → **+ Add product** for each of the four below. After saving each product, on the product page click **Create payment link**, configure the options shown, then copy the resulting `https://buy.stripe.com/...` URL.

| Tier | Product name | Price | Type | Payment Link options |
|---|---|---|---|---|
| Toss | `Chappie — The Toss` | $5 USD | One-time | Default; collect email |
| Perch | `Chappie — The Perch` | $10 USD | Recurring monthly | Subscription; collect email |
| Patron | `Chappie — The Patron` | $50 USD | Recurring monthly | Subscription; collect email |
| Name a Number | `Chappie — Name a Number` | **Customer chooses** ($1 minimum, $10000 maximum suggested) | One-time | "Customer chooses price" toggled on; collect email |

For each Payment Link:
- **Confirmation page:** redirect to `https://chappiethebot.com/?backed=1` (or leave default Stripe-hosted "Thank you" if simpler)
- **Receipts:** on (Stripe sends them automatically)
- **Phone collection:** off
- **Allow promotion codes:** off (for now)

## Where to paste the URLs

### Vercel (production)

Project Settings → **Environment Variables** → add four vars in the Production environment:

```
NEXT_PUBLIC_STRIPE_LINK_TOSS=https://buy.stripe.com/...
NEXT_PUBLIC_STRIPE_LINK_PERCH=https://buy.stripe.com/...
NEXT_PUBLIC_STRIPE_LINK_PATRON=https://buy.stripe.com/...
NEXT_PUBLIC_STRIPE_LINK_NAME_NUMBER=https://buy.stripe.com/...
```

Then trigger a redeploy (Deployments → latest → ⋯ → Redeploy). Disabled buttons go live immediately.

### Local dev

Create `.env.local` in the repo root (already gitignored) with the same four vars. Run `npm run dev` and the buttons activate.

## Webhooks (optional, defer)

Not needed for the tip jar to work — Stripe Payment Links handle everything end-to-end. Add a webhook later only when we want to:

- Auto-credit supporters on the public wall (`checkout.session.completed`)
- Auto-add subscribers to a Perch/Patron-only email list
- Programmatically log every sale to the daily ledger

When that day comes, add `STRIPE_WEBHOOK_SECRET` (server-only, no NEXT_PUBLIC_ prefix) and a route handler at `app/api/stripe/webhook/route.ts` with signature verification.

## Why we left LemonSqueezy

LS account verification was rejected as of 2026-05-04 and live mode stayed gated behind it. Stripe Connect ID was already cleared (Day 4 log). Stripe Payment Links ship same-day with no platform-approval bottleneck. The four LS product UUIDs in the historical commits are no longer used; the LS account itself is sitting dormant in case we want to revisit it later.
