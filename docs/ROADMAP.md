# Data Wand Website Roadmap

Last updated: March 2026

## Current State

- [x] GitHub Pages -> Vercel migration completed for static marketing site
- [x] Canonical domain and redirects verified (`data-wand.ai`)
- [x] GitHub Pages disabled
- [x] Root `README.md` standardized across active branches

## In Progress

- [x] Remix scaffold created at `apps/web` on `remix-app` branch
- [ ] Render staging deployment from `apps/web`
- [ ] Marketing page parity in Remix

## Planned

- [ ] Supabase auth/profile model verification with current production setup
- [ ] Identity unification plan (Cloudflare Worker auth -> Supabase Auth JWTs, or account linking)
- [ ] Dashboard usage integration across extension, iOS, and web app

## Blocked

- [ ] Stripe checkout/portal/webhook production implementation
  - Blocker: EIN/Stripe account readiness pending
  - Interim plan: feature-flag billing UI and defer live billing flows

## Cutover Decision (Later)

- [ ] Choose final topology:
  - Option A: keep marketing on Vercel, app on `app.data-wand.ai` (Render)
  - Option B: unify all web routes on Render
