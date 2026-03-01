# Data Wand Website

Marketing site for Data Wand, currently deployed on Vercel at:

- https://data-wand.ai

## Stack

- Static HTML/CSS/JS (current)
- Vercel hosting
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

Use any static file server from repo root. Example:

```bash
python3 -m http.server 8080
```

Then open `http://localhost:8080`.

## Deployments

- Vercel project tracks this repository.
- Production branch is currently `master`.
- URL routing is configured in `vercel.json`.

## Migration Notes

GitHub Pages -> Vercel cutover runbook and verification checklist:

- `docs/README.md`

## Next Planned Phase

Planned migration to a Next.js product site is defined in:

- `yc-datawand/docs/planning/nextjs-product-site-spec.md` (in the main product repo)
