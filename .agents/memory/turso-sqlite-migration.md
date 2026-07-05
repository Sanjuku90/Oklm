---
name: Turso/libSQL migration from raw sqlite3
description: How this app's raw sqlite3 code was made to work against Turso (remote libSQL), and the quirks that broke on first attempt
---

When a Flask app uses raw `sqlite3` (not an ORM) with a single `get_db_connection()` choke point, migrating to Turso (hosted libSQL) is far less invasive than moving to Postgres — same SQL dialect, same `?` placeholders, same `lastrowid`/`fetchone`/`fetchall` shape via the `libsql_experimental` pip package.

**Why:** Postgres would require rewriting every query (placeholders, autoincrement, dialect differences) across ~150+ call sites; Turso only needs a connection-layer adapter.

**How to apply — quirks that differ from local sqlite3, all handled via a wrapper (`TursoConnection`/`TursoCursor`/`TursoRow`) at the single `get_db_connection()` choke point:**
- Remote rows come back as plain tuples, not `sqlite3.Row` — dict/key-style `row['col']` access breaks unless you wrap rows using `cursor.description` to map column names.
- Mutating PRAGMAs (`journal_mode`, `busy_timeout`, `synchronous`, `cache_size`, `temp_store`) are rejected by Hrana with "SQL not allowed statement" — must no-op these specific pragmas remotely. Read-only pragmas like `PRAGMA table_info(...)` work fine and pass through.
- Errors surface as `ValueError` with an Hrana-wrapped message, not `sqlite3.OperationalError` — re-raise as `sqlite3.OperationalError` in the wrapper so existing `except sqlite3.OperationalError` call sites keep working unchanged.
- Turso's SQL parser is stricter than local SQLite about double-quoted strings: `datetime("now", "+30 days")` fails with "no such column: now" because double quotes are parsed as identifiers, not string literals. Must use single quotes for string literals in seed/migration SQL.
- Direct remote connections (`libsql.connect(url, auth_token=...)`, no local file/sync_url) are simplest for a multi-worker gunicorn deployment — avoids embedded-replica sync/staleness issues across workers.
