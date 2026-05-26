# ADR-0001: Full English/Spanish bilingualism via locale-based routing

## Status
Accepted

## Context
Luis Canchola's core differentiator is serving the Mexican-American market bilingually. The site could have surfaced "we speak Spanish" as a single line of English copy, or it could be a fully translated site where Spanish-speaking visitors navigate and read entirely in Spanish.

## Decision
The Acquisition Site is fully bilingual. All pages are available at `/en/...` and `/es/...`. Locale is detected from the browser and the user can switch. Implementation uses `next-intl`.

## Consequences
- All marketing copy must be authored and maintained in both languages.
- URL structure is locked to locale prefixes — changing this later would break inbound links.
- Spanish-speaking prospects experience the site in their language, which directly reinforces the USP rather than just claiming it.
