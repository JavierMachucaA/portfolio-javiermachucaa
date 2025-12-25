## Implement Task Prompt

Context:
- Repo root: the React + Vite portfolio project.
- Primary goals: small, well-scoped, testable frontend changes.

Instructions for the implementer (AI or human):
1. Read the task entry from `frontend-spec.yaml` and focus only on the
   described files. Do not modify unrelated files.
2. Produce a concise plan: list of code changes (files to add/modify),
   rationale, and an estimated time (hours).
3. Implement code changes. Keep diffs minimal and follow existing
   coding style (TypeScript + React functional components + CSS
   modules/files).
4. Add or update tests where appropriate.
5. Add a short `CHANGELOG` section (2-4 lines) describing the user-visible
   change.

Output format required:
- A brief plan (1-3 bullets).
- A list of changed files with short descriptions.
- The code diffs (or PR-style patch) standalone.
- A final verification checklist (lint, build, basic manual test steps).

Notes:
- If the task affects user-visible strings, update `src/data/portfolioData.ts`
  or other data files to include both language variants.
- Favor accessibility and small bundle/CPU improvements by default.
