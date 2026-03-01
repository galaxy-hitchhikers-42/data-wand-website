# MCP Setup (Render) for Codex/Windsurf

This project can use Render MCP so AI tools can inspect deploys, services, and logs.

## 1. Prerequisites

1. Render API key from Render dashboard
2. `RENDER_API_KEY` exported in your shell environment

Example (`zsh`):

```bash
echo 'export RENDER_API_KEY="YOUR_RENDER_API_KEY"' >> ~/.zshrc
source ~/.zshrc
```

## 2. Codex Global MCP Config

Codex CLI uses `~/.codex/config.toml`.

Required block:

```toml
[mcp_servers.render]
url = "https://mcp.render.com/mcp"
bearer_token_env_var = "RENDER_API_KEY"
```

Verify:

```bash
codex mcp list
```

Expected auth state: `Bearer token`.

## 3. Windsurf Project MCP Config (Optional but Recommended)

Project-local config file:

- `.vscode/mcp.json`

Example:

```json
{
  "servers": {
    "render": {
      "type": "http",
      "url": "https://mcp.render.com/mcp",
      "headers": {
        "Authorization": "Bearer ${env:RENDER_API_KEY}"
      }
    }
  }
}
```

Note: `.vscode/` is gitignored in this repo, so this remains local by default.

## 4. If MCP Tools Are Not Visible

1. Fully restart Windsurf so it inherits updated environment variables.
2. Re-check `RENDER_API_KEY` in terminal: `echo $RENDER_API_KEY`
3. Confirm Codex MCP registration: `codex mcp list`
4. Use Render CLI fallback for logs:

```bash
render workspace set datawand
render services -o json
render deploys list <service-id> -o json
render logs -r <service-id> --limit 200 --direction backward -o text
```

## 5. Security

1. Never commit API keys in repo files.
2. Prefer environment variables over plaintext token files.
3. Rotate `RENDER_API_KEY` if exposed.
