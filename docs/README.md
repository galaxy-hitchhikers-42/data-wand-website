# Vercel Migration Notes (Completed)

GitHub Pages -> Vercel cutover for this static site is complete.

## Current Deployment State

1. Hosting: Vercel
2. Production branch: `master`
3. Canonical domain: `https://data-wand.ai`
4. GitHub Pages: disabled
5. `.com` redirects: managed via GoDaddy forwarding to `https://data-wand.ai`

## Repository Configuration

1. `vercel.json` handles clean URL routing for static pages:
- `/` -> `index.html`
- `/about` -> `about.html`
- `/how-it-works` -> `how-it-works.html`
- `/pricing` -> `pricing.html`
- `/use-cases/:slug` -> `/use-cases/:slug.html`
2. `/:path*.html` permanently redirects to `/:path*`.

## Post-Cutover Checks

1. `https://data-wand.ai` loads with full styling/scripts.
2. `https://www.data-wand.ai` redirects to `https://data-wand.ai` (if apex is canonical).
3. `https://data-wand.ai/styles.css` and `https://data-wand.ai/script.js` return `200`.
4. `https://data-wand.com` and `https://www.data-wand.com` redirect to `https://data-wand.ai`.
5. `https://data-wand.ai/robots.txt` and `https://data-wand.ai/sitemap.xml` are reachable.

## Next Phase

Planned Next.js migration work is tracked separately in the product planning docs.
