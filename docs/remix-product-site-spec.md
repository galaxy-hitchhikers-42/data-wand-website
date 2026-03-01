# Data Wand — Remix Product Site Spec

Version 2.0 (Draft)  
Date: March 2026

## 0. Immediate Execution Priority (Current)

Before major feature implementation, complete a short hardening + parity cycle:

1. Keep runtime stable on Node 20 LTS in Render (`engines.node = 20.x`)
2. Maintain security policy:
   - Prod/runtime dependencies must remain at 0 known vulnerabilities
   - Dev/build vulnerabilities are tracked and reduced intentionally (no blind auto-fix)
3. Reach full staging navigability for all public marketing routes in Remix
4. Only then begin broader auth/dashboard feature delivery

## 1. Objective

Keep the current static marketing site live on Vercel while building a new full product hub in Remix, deployed on Render.  
Cut over only after auth, billing, and dashboard parity is complete.

## 2. Current State

- Production marketing site: static HTML/CSS/JS on Vercel (`data-wand.ai`)
- GitHub Pages decommissioned
- DNS active via Cloudflare (`.ai`)
- `.com` redirects managed in GoDaddy

## 3. Target Architecture

- Framework: Remix (full-stack React)
- Hosting: Render (web service)
- Auth + DB: Supabase
- Billing: Stripe (Checkout + Portal + Webhooks)
- Styling: Tailwind CSS (or existing CSS migration path)
- Deployment model:
- Existing static site remains production during build
- Remix app lives under `apps/web`
- Staging URL on Render for integration testing

## 4. Repository Strategy

- Keep static site at repo root (current production)
- Add Remix app at `apps/web`
- New active branch for app build (for example `remix-app`)
- Deploy Remix staging from `apps/web` on Render

## 5. Route Plan (Remix)

### Public Marketing

- `/`
- `/how-it-works`
- `/pricing`
- `/about`
- `/use-cases/:slug`
- `/download`

### Auth / App

- `/login`
- `/signup`
- `/dashboard`
- `/dashboard/usage`
- `/dashboard/billing`
- `/dashboard/settings`

### Server Endpoints

- `POST /api/stripe/create-checkout-session`
- `POST /api/stripe/create-portal-session`
- `POST /api/stripe/webhook`
- `GET /api/usage`

## 6. Auth & Billing Flows

- Supabase session-based auth
- Protected routes enforced in Remix loaders
- Stripe customer per profile
- Webhook-driven subscription sync to Supabase profiles

## 6.1 Supabase / Worker Status (Current Assumption)

This is the current planning assumption based on repository artifacts.  
Live deployment state is not yet confirmed and should be treated as TODO until
verified with the current Supabase project and Worker environment.

Planned/current-code model:

- Cloudflare Worker uses Supabase REST with `SUPABASE_SERVICE_KEY` (service role)
- Worker-managed `users` model with password hashes + credits
- Extension auto-registers device accounts (`ext-{id}@datawand.app`)
- Worker issues custom JWTs (`iss: datawand-proxy`, `aud: datawand-client`)
- RPC-based credit accounting (`deduct_credit`, `refund_credit`)
- RLS deny-all for client roles, service role bypass

Verification required before implementation decisions:

- Confirm which schema objects are actually deployed in production Supabase
- Confirm whether Kelly has already implemented any `auth.users`/`profiles` linkage
- Confirm whether teams/API-key data model exists in current database
- Confirm current Worker auth mode in production (custom JWT vs Supabase JWT)

Implication: we must plan identity unification, not greenfield auth.

## 6.2 Identity Unification Decision

Target for Remix should match the prior recommendation from planning docs:

- Preferred: move Worker auth to Supabase Auth JWT validation (single identity)
- Transitional fallback: keep Worker auth and add account-linking (`profile_id`)

Until this is done, dashboard usage/billing in Remix will only be partially aligned
with extension/iOS identity.

## 6.3 Cloudflare Role (Remix + Render Architecture)

Cloudflare remains in scope even if the web app is hosted on Render:

- Cloudflare DNS continues to manage `data-wand.ai` records
- Cloudflare Worker can continue to serve LLM proxy endpoints
- Remix app integrates with Worker/Supabase for account and usage visibility

Hosting decision (Vercel/Render) and Worker decision are separate concerns.

## 7. Render Deployment Requirements

- Service root directory: `apps/web`
- Build command: app build script in `apps/web`
- Start command: app start script in `apps/web`
- Runtime: Node 20 LTS (`20.x`) for framework/tooling stability
- Staging env vars:
- `SUPABASE_URL`
- `SUPABASE_ANON_KEY`
- `SUPABASE_SERVICE_ROLE_KEY` (server only)
- `STRIPE_SECRET_KEY`
- `STRIPE_WEBHOOK_SECRET`
- `APP_BASE_URL` (staging/prod specific)

## 7.1 Secrets Source of Truth (Operational Assumption)

- Current assumption: Cloudflare currently holds production secrets used by the
  Worker/Supabase integration.
- Remix on Render should use a separate environment-variable set in Render.
- Secret values should be copied from the authoritative operator source, not
  re-generated ad hoc.
- Required verification step: Kelly (or current infra owner) confirms which
  secrets are active and rotates any legacy/shared values before production cutover.

## 8. Migration Phases

### Phase 1 — Scaffold + Hardening

- Initialize Remix app in `apps/web`
- Set up base layout + shared nav/footer
- Add health route and deploy to Render staging
- Perform dependency/security triage baseline:
- Run `npm audit` (full dependency tree)
- Run `npm audit --omit=dev` (runtime vulnerability gate)
- Track findings and planned upgrades in roadmap/issues

### Phase 2 — Marketing Parity + Navigability

- Port all existing public pages/content
- Ensure all internal links are navigable in staging
- Ensure CSS/JS/image assets load correctly on all migrated routes
- Preserve SEO tags, sitemap, robots, OG tags
- Ensure route parity and redirects

### Phase 3 — Auth + Dashboard

- Integrate Supabase auth/session
- Build login/signup/settings pages
- Add protected dashboard routes

### Phase 4 — Stripe Billing

- Stripe implementation is blocked until EIN/account setup is complete
- In interim, ship billing UI in "coming soon" or feature-flagged mode
- Add checkout + portal endpoints after Stripe account readiness
- Add webhook handler + subscription sync after Stripe readiness
- Connect pricing CTAs to live flow after end-to-end Stripe test

### Phase 5 — Usage Data

- Implement usage API
- Build usage charts/cards
- Integrate extension/iOS event logging

### Phase 6 — Cutover

- Decide host strategy:
- Option A: Keep marketing root on Vercel, app at `app.data-wand.ai` (Render)
- Option B: Move full site to Render at `data-wand.ai`
- Run final redirect/SEO checks
- Execute production DNS cutover only after parity sign-off

## 9. Acceptance Criteria

- All current marketing pages preserved with no SEO regression
- All public routes fully navigable in Render staging
- No broken static assets (CSS/JS/images/fonts) on migrated routes
- Auth, billing, and dashboard flows working end-to-end
- No dependency on Vercel-specific runtime behavior
- Staging and production run on Render from `apps/web`
- Rollback plan documented before cutover
- Worker/extension identity unified with website account model, or explicit
  account-linking completed and documented

## 10. Open Decisions

- Canonical production topology:
- Split-host (`data-wand.ai` marketing + `app.data-wand.ai` app)
- Unified-host (all routes on Render)
- Styling migration approach:
- Keep current CSS and incrementally modernize
- Tailwind-first rewrite during port
