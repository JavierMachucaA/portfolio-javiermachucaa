<!-- Task card template for tracking and PR description -->
## Task: {{id}} — {{title}}

Description:
{{description}}

Files to touch:
{{#files}}
- {{.}}
{{/files}}

Expected output:
{{output}}

Estimate: {{estimate_hours}} hours

Acceptance criteria:
- User-visible behavior matches description
- No TypeScript errors
- Basic accessibility verified
