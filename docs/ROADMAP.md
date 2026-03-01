# Data Wand Website Roadmap

Last updated: March 2026

## Session Checkpoint (2026-03-01)

- [x] Vercel migration completed and validated on `data-wand.ai`
- [x] `vercel-migration` branch deleted (local + remote)
- [x] `remix-app` scaffold created at `apps/web`
- [x] Project MCP file added at `.vscode/mcp.json` (Render server via env var token)
- [x] Generated and committed `apps/web/package-lock.json` for Render `npm ci` builds
- [x] Completed successful Render staging build/deploy from `remix-app`
- [x] Added `docs/MCP_SETUP.md` with Render MCP setup steps
- [x] Pinned `apps/web` Node engine to `20.x` for LTS runtime stability

## Current State

- [x] GitHub Pages -> Vercel migration completed for static marketing site
- [x] Canonical domain and redirects verified (`data-wand.ai`)
- [x] GitHub Pages disabled
- [x] Root `README.md` standardized across active branches
- [x] Vercel branch deploys constrained via `vercel.json` (`master` only)

## In Progress

- [x] Remix scaffold created at `apps/web` on `remix-app` branch
- [x] Render staging deployment from `apps/web`
- [ ] Marketing page parity in Remix
- [ ] Full internal route navigability in Remix staging (all public routes linked and working)
- [ ] Split-host routing decision for staging (`data-wand.ai` + `app.data-wand.ai`) vs unified host

## Planned

- [ ] Dependency/security hardening cycle (before heavy feature build):
  - [x] Audit triage baseline complete (`npm audit` + `npm audit --omit=dev`)
  - [x] Runtime/prod vulnerabilities confirmed at 0
  - [ ] Dev/build toolchain vulnerability reduction via controlled upgrades
  - [ ] Upgrade spike: evaluate Remix + Vite ecosystem upgrade path without breaking build
- [ ] Remix route parity implementation checklist:
  - [ ] Port existing static routes (`/`, `/about`, `/how-it-works`, `/pricing`, `/use-cases/:slug`)
  - [ ] Ensure static assets and CSS/JS load under Remix routing
  - [ ] Validate no broken internal links (desktop + mobile)
  - [ ] Preserve canonical tags, sitemap, robots behavior
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
