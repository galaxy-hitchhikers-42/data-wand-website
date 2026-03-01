# Data Wand Site Migration Checklist (GitHub Pages -> Vercel)

This checklist prepares the current static marketing site for Vercel before the Next.js rebuild begins.

## What Is Already In This Repo

1. `vercel.json` enables clean URLs for existing `.html` files (`/about` -> `about.html`, `/use-cases/non-profits` -> `use-cases/non-profits.html`).
2. `vercel.json` adds canonical host redirects to `https://data-wand.ai`.
3. Redirected hosts are `www.data-wand.ai`, `data-wand.com`, and `www.data-wand.com`.

## Vercel Project Setup

1. Import this GitHub repo into Vercel.
2. Framework preset: `Other` (static).
3. Build command: leave empty.
4. Output directory: leave empty (repo root).
5. Deploy and verify preview URL routes: `/`, `/how-it-works`, `/pricing`, `/about`, and `/use-cases/non-profits` (plus all other use cases).
6. Verify unknown routes return the custom 404 page.

## Cloudflare DNS Cutover

1. In Vercel, add domains `data-wand.ai` (primary), `www.data-wand.ai`, `data-wand.com`, and `www.data-wand.com`.
2. In Cloudflare DNS, update required records to Vercel targets (as shown by Vercel domain setup).
3. Remove or disable any conflicting GitHub Pages DNS records.

## GitHub Pages Decommission

1. In GitHub repo settings, disable GitHub Pages.
2. Keep `CNAME` in this repo only if GitHub Pages remains temporarily active.
3. After full cutover confirmation, remove `CNAME` in a cleanup PR.

## Post-Cutover Verification

1. Verify `https://www.data-wand.ai/pricing` redirects to `https://data-wand.ai/pricing`.
2. Verify `https://data-wand.com/` redirects to `https://data-wand.ai/`.
3. Verify `https://data-wand.ai/robots.txt` is reachable.
4. Verify `https://data-wand.ai/sitemap.xml` is reachable.
5. Verify OG image URLs resolve correctly from shared links.
6. Verify no broken assets (icons, images, CSS, JS) on desktop and mobile.

## Next Step (Phase 2)

After this static cutover is stable, initialize the Next.js App Router project and port pages incrementally using the product spec.
