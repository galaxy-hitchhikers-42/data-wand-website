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
- [x] Migrated `apps/web` from Remix v2 CLI to React Router framework tooling
- [x] Removed Vite CJS deprecation warning from build output
- [x] Verified full `npm audit` and `npm audit --omit=dev` at 0 vulnerabilities

## Session Checkpoint (2026-03-02)

- [x] Merged `master` into `remix-app` and resolved planning-doc conflicts
- [x] Completed CodeRabbit remediation batch for static-page parity issues:
  - [x] Accessibility semantics cleanup (dropdown/menu roles and mobile nav landmarks)
  - [x] Root-relative asset path normalization for use-case pages
  - [x] Metadata/copy refresh and stale footer year updates
- [x] Added environment-aware `robots.txt` route in `apps/web` (noindex behavior for non-production hosts)
- [x] Verified local `apps/web` build passes after remediation (`npm run build`)

## Current State

- [x] GitHub Pages -> Vercel migration completed for static marketing site
- [x] Canonical domain and redirects verified (`data-wand.ai`)
- [x] GitHub Pages disabled
- [x] Root `README.md` standardized across active branches
- [x] Vercel branch deploys constrained via `vercel.json` (`master` only)
- [x] Render staging route parity wired to legacy marketing pages in `apps/web/static-pages`

## In Progress

- [x] React Router scaffold created at `apps/web` on `remix-app` branch
- [x] Render staging deployment from `apps/web`
- [x] Marketing route parity wiring complete in staging app
- [ ] Manual visual QA sweep on Render staging URL for all public routes/assets
- [ ] Split-host routing decision for staging (`data-wand.ai` + `app.data-wand.ai`) vs unified host

## Planned

- [ ] Dependency/security hardening cycle (before heavy feature build):
  - [x] Audit triage baseline complete (`npm audit` + `npm audit --omit=dev`)
  - [x] Runtime/prod vulnerabilities confirmed at 0
  - [x] Dev/build vulnerabilities reduced to 0 after React Router migration
  - [x] Upgrade spike completed: moved to React Router framework tooling
- [ ] React Router parity verification checklist:
  - [x] Ported static route set (`/`, `/about`, `/how-it-works`, `/pricing`, `/use-cases/:slug`)
  - [x] Static assets (CSS/JS/images) served from `apps/web/public`
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
