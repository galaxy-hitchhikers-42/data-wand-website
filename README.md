# Data Wand Website

Website repository for Data Wand.

Primary production hosting is now Render, deploying from `master`.

## Stack

- React Router app in `apps/web`
- Render hosting (primary)
- Static marketing source files in `apps/web/static-pages`
- Cloudflare DNS for `data-wand.ai`
- GoDaddy forwarding for `data-wand.com` and `www.data-wand.com`

## Pages

- `/` (Home)
- `/how-it-works`
- `/pricing`
- `/about`
- `/use-cases/*`
- custom `404`

## Local Preview

Run the web app from `apps/web`:

```bash
cd apps/web
npm install
npm run dev
```

Then open the local dev URL printed by the React Router dev server.

## Deployments

- Render service deploys from `master` (`apps/web` rootDir).
- Vercel is retained as a legacy fallback path (`legacy-vercel` branch).
- Render check workflow: `.github/workflows/render-preview-check.yml`
- Render Pull Request Previews are enabled for branch/PR validation.

## Git Workflow

- Default flow: `feature/*` -> `master` with PR review + Render PR Preview validation.
- Optional integration flow: `feature/*` -> `staging` for combined QA/release batching.
- Release flow when using staging: `staging` -> `master`.
- Production: Render deploys from `master`.

## Planning Docs

- `docs/ROADMAP.md`
- `docs/remix-product-site-spec.md`
- `docs/RENDER_GITHUB_CHECKS.md`
- `docs/EDGE_CACHING_STRATEGY.md`
