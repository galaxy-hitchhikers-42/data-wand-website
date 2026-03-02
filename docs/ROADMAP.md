# Data Wand Website Roadmap

Last updated: March 2026

## Session Checkpoint (2026-03-01)

- [x] Vercel migration completed and validated on `data-wand.ai`
- [x] `vercel-migration` branch deleted (local + remote)
- [x] `remix-app` scaffold created at `apps/web`
- [x] Render MCP setup doc added at `docs/MCP_SETUP.md`
- [x] Generated and committed `apps/web/package-lock.json` for Render `npm ci` builds
- [x] Completed successful Render staging build/deploy from `remix-app`
- [x] Added `docs/MCP_SETUP.md` with Render MCP setup steps
- [x] Pinned `apps/web` Node engine to `20.x` for LTS runtime stability
- [x] Migrated `apps/web` from Remix v2 CLI to React Router framework tooling
- [x] Removed Vite CJS deprecation warning from build output
- [x] Verified full `npm audit` and `npm audit --omit=dev` at 0 vulnerabilities

## Session Checkpoint (2026-03-02)

- [x] Merged `master` into `remix-app` and resolved planning-doc conflicts
- [ ] CodeRabbit remediation batch in progress for static-page parity issues:
  - [x] Initial accessibility semantics cleanup (dropdown/menu roles and mobile nav landmarks)
  - [x] Initial root-relative asset path normalization for use-case pages
  - [x] Metadata/copy refresh and many stale footer year updates
  - [ ] Repo-wide follow-up sweep still needed on untouched static pages
- [x] Added environment-aware `robots.txt` route in `apps/web` (noindex behavior for non-production hosts)
- [x] Verified local `apps/web` build passes after remediation (`npm run build`)

## Current State

- [x] GitHub Pages -> Vercel migration completed for static marketing site
- [x] Canonical domain and redirects verified (`data-wand.ai`)
- [x] GitHub Pages disabled
- [x] Root `README.md` standardized across active branches
- [x] Vercel branch deploys constrained via `vercel.json` (`master` only)
- [x] Render staging route parity wired to legacy marketing pages in `apps/web/static-pages`
- [x] React Router scaffold created at `apps/web` on `remix-app` branch
- [x] Render staging deployment from `apps/web`
- [x] Marketing route parity wiring complete in staging app
- [x] Dependency/security hardening cycle baseline completed

## In Progress

- [ ] Repo-wide static-page consistency sweep (remaining menu/mobile-nav semantics, root-relative asset paths, and footer-year normalization)
- [ ] Manual visual QA sweep on Render staging URL for all public routes/assets
- [ ] Split-host routing decision for staging (`data-wand.ai` + `app.data-wand.ai`) vs unified host

## Planned

- [ ] React Router parity verification checklist (remaining):
  - Completed:
  - [x] Ported static route set (`/`, `/about`, `/how-it-works`, `/pricing`, `/use-cases/:slug`)
  - [x] Static assets (CSS/JS/images) served from `apps/web/public`
  - Remaining:
  - [ ] Validate no broken internal links (desktop + mobile) on Render staging
  - [ ] Preserve canonical tags, sitemap, robots behavior
- [ ] Post-cutover runtime upgrade: Node 20 -> Node 22 (before Node 20 EOL)
  - [ ] Switch `apps/web` engine/runtime target to Node 22
  - [ ] Reinstall dependencies and refresh lockfile on Node 22
  - [ ] Run build/smoke tests and resolve compatibility issues
  - [ ] Re-run CodeRabbit on the Node 22 upgrade PR
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
