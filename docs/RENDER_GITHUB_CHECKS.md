# Render GitHub PR Check Setup

This repo includes a GitHub Action at:

- `.github/workflows/render-preview-check.yml`

It runs on PRs to `master`, triggers a Render deploy, and polls a health endpoint.

## Required GitHub Settings

Set these in GitHub repository settings:

1. **Secret**: `RENDER_STAGING_DEPLOY_HOOK`
- Value: Render deploy hook URL for your staging web service

2. **Repository variable**: `RENDER_STAGING_HEALTH_URL`
- Value: Full URL to the health endpoint (for example `https://your-staging-url/health`)

## Behavior

- If both values are present:
  - Action triggers Render deploy.
  - Action polls health endpoint for HTTP `200`.
  - Check passes/fails accordingly.

- If either value is missing:
  - Action emits a warning and skips validation.
  - This keeps rollout non-blocking while you wire configuration.

## Suggested Next Step After Cutover

Once Render is your primary production path, require this check in branch protection for `master`.
