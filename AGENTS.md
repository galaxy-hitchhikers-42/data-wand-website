# AGENTS.md

Repository-level working agreement for coding agents (Codex, Claude Code, etc.).

## Scope

Applies to the entire repository unless a deeper-path `AGENTS.md` overrides part of it.

## Workflow Defaults

1. Do not work directly on `master`/`main`.
2. Use task branches for all non-trivial changes (for example `feature/<name>`).
3. Default merge path is PR from feature branch to `master`.
4. Use `staging` as an optional integration/release branch when batching or higher-risk coordination is needed.
5. When `staging` is used, promote via PR from `staging` to `master`.
6. Keep commits granular and logically scoped.
7. Prefer opening a PR for review rather than pushing directly to protected branches.

## Planning and Execution

1. Confirm current branch and git status before editing.
2. For non-trivial tasks, state a short plan before major edits.
3. Preserve existing behavior unless the task explicitly changes it.
4. If unexpected repo changes appear mid-task, stop and ask before proceeding.

## Editing Conventions

1. Make minimal, targeted diffs.
2. Avoid broad refactors unless requested.
3. Keep naming/style consistent with nearby code.
4. Do not add headers/license blocks unless requested.
5. Use ASCII unless a file already requires Unicode.

## Validation

1. Run the smallest relevant verification for changed files.
2. Report what was verified and what was not.
3. If tests/build cannot run, state why clearly.

## Deployment and Migration Safety

1. For hosting/DNS migrations, prefer additive and reversible changes.
2. Do not remove legacy settings until cutover is verified.
3. Document manual operator steps in repo docs when applicable.

## Instruction Precedence

1. Follow system/developer/user instructions first.
2. Then follow this `AGENTS.md`.
3. Then follow conventions in nearby docs (`README`, project docs, inline notes).
4. If instructions conflict, call it out and follow higher-priority instructions.

## Communication Style

1. Be concise, direct, and implementation-focused.
2. Summaries should include changed files and next actions.
3. Raise risks and assumptions early.
