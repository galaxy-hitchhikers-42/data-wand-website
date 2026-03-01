# Session Checkpoint — 2026-03-01

Use this file to resume quickly after IDE restart.

## Completed

1. Static site migration to Vercel is complete and stable on `data-wand.ai`.
2. GitHub Pages disabled.
3. Redirect loop issue fixed by removing host redirect rules from `vercel.json`.
4. Root `README.md` is standardized; `docs/README.md` removed across active branches.
5. `vercel-migration` branch deleted locally and remotely.
6. Remix scaffold created in `apps/web` on branch `remix-app`.
7. Planning docs updated for Remix + Render direction and Stripe EIN blocker.

## Branch State (data-wand-website)

1. `master` (production static site)
2. `remix-app` (active app-development branch)

## Current Render Setup Target

1. Branch: `remix-app`
2. Root Directory: `apps/web`
3. Build Command: `npm ci && npm run build`
4. Start Command: `npm run start`
5. Runtime: Node

Note: Render build failed because `apps/web/package-lock.json` is missing.

## Immediate Next Step

1. Generate and commit `apps/web/package-lock.json` on `remix-app`.
2. Push `remix-app`.
3. Redeploy Render service.

## MCP Setup

Project-level MCP config added:

- `.vscode/mcp.json` with Render MCP URL and `${env:RENDER_API_KEY}` auth header.

If env var was set after app launch, restart Windsurf to pick it up.

## Cross-Repo Docs Status

`yc-datawand` main was updated with:

1. Roadmap notes for Remix + Render direction.
2. Stripe production billing marked blocked pending EIN.
3. New planning file: `docs/planning/remix-product-site-spec.md`.
