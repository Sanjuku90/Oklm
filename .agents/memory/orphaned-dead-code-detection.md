---
name: Orphaned dead code from bad merges/edits
description: A large block of table-creation code was silently dead for a long time, masked by a pre-seeded local file
---

A large chunk of `CREATE TABLE`/seed-data code (~400 lines) had been accidentally left indented inside a *different* function (after that function's `try/except` which always returned), referencing a `cursor` variable that was never defined in that scope. It never executed and would have raised `NameError` if reached — but was masked for a long time because the already-seeded local SQLite file (committed to git) already had those tables, so nobody noticed `init_db()` didn't actually create them on a fresh database.

**Why:** Switching to a fresh remote database (no pre-seeded file) is what exposed the bug — "no such table" errors on tables that "should" have been created by `init_db()`.

**How to apply:** When migrating a SQLite-file-backed app to a fresh/remote database, don't assume `init_db()` (or equivalent) actually creates everything it appears to — diff the actual function boundaries (`grep -n "^def "`) against where CREATE TABLE statements live, since indentation bugs can silently orphan code for years when a local pre-seeded file backstops the gap.
