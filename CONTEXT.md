# Lualca Bookkeeping — Domain Glossary

## Application

**Application** — A single Next.js app with two surface areas: the **Acquisition Site** (public) and the **Client Portal** (authenticated). The Acquisition Site is built first.

**Acquisition Site** — The public-facing surface. Goal: convert visitors into leads by booking a consultation or submitting a contact form. No authentication required. Fully bilingual: all pages available in English (`/en/`) and Spanish (`/es/`). Launched as a single scrolling page; individual service pages added later for SEO.

**Client Portal** — The authenticated surface where existing clients manage documents (uploads, downloads, tax returns, bookkeeping reports). Deferred to a later phase.

## Tech Stack

**Framework** — Next.js (App Router), TypeScript, Tailwind CSS.

**Internationalisation** — `next-intl`. Locale-prefixed routes: `/en/` and `/es/`. Copy lives in `messages/en.json` and `messages/es.json`.

**Scheduling** — Cal.com embed. Handles free consultation booking, availability, confirmations, and reminders.

**Email** — Resend. Contact form submissions are sent from a Next.js Server Action to `admin@lualcabookkeeping.com`.

## Design

**Color Palette** — Charcoal (primary text + UI) + Gold (accent, CTAs) on an Off-White background. Conveys premium and professional without blending into generic accounting-firm navy.

**Hero Direction** — Identity-led. Leads with audience and bilingual USP: "Built for Texas business owners — in English and Spanish." Immediately self-selects the right visitor and surfaces the differentiator no competitor can match.

## Content

**Locale File** — A JSON file containing all copy for one language. Paths: `messages/en.json` (English) and `messages/es.json` (Spanish). Managed in code by the developer; Luis does not edit content directly.

**Seasonal Banner** — A section of the Acquisition Site that surfaces tax deadlines and promotions. Shown during tax season (January 1 – April 15). Date-gated in code; no CMS toggle needed.

## Audience

**Primary Client** — A small business owner (sole proprietor, LLC, or S-Corp) who needs ongoing monthly services: bookkeeping, payroll, and tax strategy. Recurring relationship, higher lifetime value. The hero of the Acquisition Site copy.

**Seasonal Client** — An individual seeking personal tax preparation during tax season (Jan–Apr). Secondary audience. Not the focus of the hero copy but should not be excluded.

## Booking

**Appointment** — A scheduled meeting between Luis and a prospect or client. Booked via an embedded Cal.com scheduler on the Acquisition Site. Cal.com handles availability, confirmations, and reminders.

**Consultation** — A free introductory Appointment. The primary CTA on the Acquisition Site. Prospect books directly via Cal.com. Contact form exists as a secondary, lower-friction option.

## Services

**Bookkeeping** — Monthly accounting: recording transactions, reconciling accounts, and producing financial reports for business owners.

**Tax Services** — Individual and business tax preparation and filing.

**Tax Strategy** — Proactive planning to minimise tax liability, distinct from filing. Engagements are advisory rather than transactional.

**Payroll Services** — Full-service payroll processing: calculating employee pay, withholding federal taxes, filing 941s/940s, and issuing W-2s at year-end. Texas-based clients; no state income tax applies.

**LLC Formation** — Assisting clients with forming a Limited Liability Company, including the associated filing and advisory work.

## Build Skills

The Acquisition Site is built section-by-section (one GitHub issue per section, all children of the Acquisition Site PRD). Each section is implemented with the `impeccable` family of design skills. The intended aesthetic is **premium but restrained** — polished, trustworthy, and "expensive" without flashy effects that would feel out of place for an accountant. The Hero is the one place we push harder, since it sets the bar.

**Applies to every section** (stated once, not repeated below):
- `frontend-design` — establishes project design context; the base for any component.
- `polish` — final pre-ship pass on alignment, spacing, and micro-details after a section is built.

**Per-section skills:**

| Section | Skills | Rationale |
| ------- | ------ | --------- |
| Walking skeleton + Hero | `extract`, `typeset`, `colorize`, `critique`, `overdrive` | `extract` lays down design tokens + the `Button`/`Section`/`Container` primitives; `typeset`/`colorize` lock the charcoal-gold-off-white type & color system; `critique` drives the human design review; `overdrive` makes the Hero feel premium (the one section we push hard). |
| Navigation | `arrange`, `animate`, `adapt`, `harden` | Sticky-nav balance; smooth-scroll + hamburger transitions; mobile collapse; long-label/i18n overflow (Spanish copy runs longer). |
| Services | `arrange`, `extract`, `colorize`, `harden` | `extract` formalizes the `Card` primitive; grid rhythm; service icon color; varied EN/ES description lengths. |
| About | `typeset`, `arrange`, `clarify`, `bolder` | Bio readability; sharpen the bilingual USP; bio/image balance; `bolder` so it doesn't read flat. |
| Testimonials | `arrange`, `delight`, `typeset` | 3-card layout; memorable quote treatment; quote/attribution hierarchy. |
| Seasonal Banner | `colorize`, `clarify`, `animate`, `harden` | Gold urgency strip; clear deadline message; tasteful entrance; date-edge rendering. |
| Booking / Cal.com embed | `harden`, `adapt`, `normalize` | Third-party embed loading/failure states; mobile embed sizing; visually match the design system. |
| Contact form | `harden`, `clarify`, `onboard`, `critique` | Validation/error/success edge cases; field labels + error messages; lower friction; UX review of result states. |
| Footer | `arrange`, `distill`, `normalize` | Keep it minimal (no social); column layout; system consistency with the nav. |
