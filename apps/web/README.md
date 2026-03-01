# Data Wand Web (Remix)

Remix app scaffold for the full product hub (auth, billing, dashboard).

## Local Development

```bash
cd apps/web
npm install
npm run dev
```

## Build + Run

```bash
cd apps/web
npm run build
npm run start
```

## Health Endpoint

- `GET /health` returns JSON health status.

## Render

Use a web service with:

- Root Directory: `apps/web`
- Build Command: `npm ci && npm run build`
- Start Command: `npm run start`
- Node version: 20+

A starter blueprint is included at `apps/web/render.yaml`.
