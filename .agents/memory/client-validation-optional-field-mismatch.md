---
name: Client-side validation blocking "optional" fields
description: A form's JS required a field the visible UI labeled optional, silently blocking submission before any request reached the server — logs showed zero hits, making it look like a backend bug.
---

Root cause pattern: a form field's label/placeholder says "(optionnel)" / "(optional)", but the submit handler's client-side guard clause (e.g. `if (!amount || !hash) { showError(); return; }`) treats it as required. Users who leave the field blank (as the UI told them they could) never trigger a network request at all — the JS validation error fires and the function returns before `fetch()` is called.

**Why:** This is easy to misdiagnose as a server/backend bug because the symptom ("deposit is impossible") looks identical to a real failure, but access/request logs show *zero* requests to the endpoint in question. The backend route can be 100% correct and still get blamed, because nothing ever reaches it. The mismatch between what the UI promises (optional) and what the JS enforces (required) is the actual bug.

**How to apply:** When a user reports a form/action "doesn't work" and the server logs show no corresponding request at all (not even a failed one), immediately suspect a client-side validation guard that's stricter than the visible UI/labels promise. Check the submit handler's early-return conditions against every field's label text, `required` attribute, and placeholder wording — look specifically for guard clauses that lump an optional field into the same truthy-check as a required one (e.g. `if (!a || !b)` where `b` is marked optional in the UI).
