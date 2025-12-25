## Review Task Prompt

When reviewing a generated change, follow this checklist:

- Functionality: Does the change implement the requested behavior?
- Correctness: Are there TypeScript type errors or runtime risks?
- Accessibility: Keyboard navigation, ARIA, and semantic HTML.
- Responsiveness: Layout and styles on small screens.
- Performance: Avoid heavy computations on render; prefer hooks.
- Tests: Are there meaningful tests for the change?
- Styling: Matches repo conventions and doesn't break other views.

Reviewer output (required):
- Short summary of findings (positive/negative).
- Required follow-ups (if any) and suggested fixes.
- If acceptable, a short merge-ready checklist.
