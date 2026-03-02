# Edge Caching Strategy (Cloudflare + Render)

## Decision (Selected)

- Use Render as the single origin/deployment pipeline for `data-wand.ai`.
- Use Cloudflare cache rules to edge-cache only marketing routes:
  - `/`
  - `/about`
  - `/pricing`
  - `/how-it-works`
  - `/use-cases/*`
- Do not edge-cache app/auth/API routes:
  - `/dashboard*`
  - `/login`
  - `/signup`
  - `/api/*`

## Objective

Improve performance for high-traffic marketing routes while keeping application and backend behavior on Render.

## Recommended Near-Term Architecture

- Keep Render as primary origin and deploy target.
- Keep Cloudflare in front of `data-wand.ai`.
- Apply edge caching only to marketing pages and static assets.
- Bypass cache for app/auth/api paths.

This keeps one deployment pipeline while reducing TTFB for landing/marketing traffic.

## Route Policy

Cache at edge (public marketing):

- `/`
- `/about`
- `/how-it-works`
- `/pricing`
- `/use-cases/*`
- static assets under `/assets/*`

Do not edge-cache (dynamic/app):

- `/dashboard*`
- `/login`
- `/signup`
- `/api/*`
- any authenticated/session-specific routes

## Header Guidelines

Marketing HTML:

- Use short revalidation windows (for example `public, s-maxage=<N>, stale-while-revalidate=<M>`).
- Ensure deploy process can invalidate old HTML when needed.

Static assets:

- Use long-lived immutable caching when file names are versioned/fingerprinted.

App/API/auth:

- Prefer `no-store` or strict revalidation semantics to avoid stale/auth-leaking responses.

## Rollout Plan

1. Add Cloudflare cache rules scoped to marketing paths only.
2. Confirm app/auth/api routes bypass edge cache.
3. Smoke-test production paths after rules are live.
4. Measure impact (TTFB, Lighthouse/Web Vitals) before/after.
5. Add deploy-time cache purge for HTML routes if needed.

## Optional Future Topology

If marketing and app release cadence diverge substantially, consider split-host:

- Marketing static pages on Cloudflare Pages.
- App and backend on Render (`app.data-wand.ai` or path-routed origin).

Keep this as a later decision; current recommendation is Cloudflare edge caching in front of Render.
