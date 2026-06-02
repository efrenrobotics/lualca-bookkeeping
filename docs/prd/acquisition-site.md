# PRD: Lualca Bookkeeping — Acquisition Site

> Living discussion and status updates: [GitHub Issue #3](https://github.com/efrenrobotics/lualca-bookkeeping/issues/3)

## Problem Statement

Luis Canchola is an Accountant and Tax Strategist serving small business owners and individuals in the Texas Mexican-American market. His existing website is visually unappealing, not mobile-responsive, and fails to convert visitors into leads. He currently acquires all clients through word of mouth, which limits growth. Prospects who find him have no credible digital presence to validate his expertise, no way to book a consultation, and no clear path to becoming a client.

## Solution

Build the Acquisition Site — the public-facing surface of the Lualca Bookkeeping Application. A bilingual (English and Spanish) single scrolling page that positions Luis as a legitimate, professional, and approachable accountant for Texas business owners. The primary conversion action is booking a free Consultation via a Cal.com embed. A secondary contact form provides a lower-friction fallback. The site is fully mobile-responsive and matches the design quality of the firms Luis aspires to compete with.

## User Stories

### Visitor (prospective Primary Client or Seasonal Client)

1. As a visitor, I want to immediately understand who this service is for, so that I can decide in under 5 seconds whether it is relevant to me.
2. As a visitor, I want to read the site in Spanish, so that I can fully understand the services offered without a language barrier.
3. As a visitor, I want to switch between English and Spanish at any time, so that I can choose the language I am most comfortable with.
4. As a visitor, I want the site to detect my browser language and default to the appropriate locale, so that I don't have to manually switch.
5. As a visitor, I want to understand what services are offered before booking, so that I know whether my needs are covered.
6. As a visitor, I want to read about Luis's background and expertise, so that I can trust him with my finances.
7. As a visitor, I want to read testimonials from real clients, so that I have social proof before reaching out.
8. As a visitor, I want to book a free Consultation directly from the site, so that I can get started without back-and-forth emails or phone calls.
9. As a visitor, I want to see Luis's availability and pick a time that works for me, so that I don't have to wait for a reply.
10. As a visitor, I want to receive a confirmation after booking a Consultation, so that I know my Appointment is confirmed.
11. As a visitor on mobile, I want the site to be fully usable on my phone, so that I can browse and book without pinching or scrolling horizontally.
12. As a visitor who is not ready to book, I want to send a message through a contact form, so that I can ask a question without committing to an Appointment.
13. As a visitor submitting the contact form, I want confirmation that my message was received, so that I don't wonder whether it went through.
14. As a visitor during tax season, I want to see a prominent notice about upcoming tax deadlines, so that I know I need to act soon.
15. As a Seasonal Client visiting outside tax season, I want to still find Luis's contact information easily, so that I can reach him when tax season arrives.
16. As a Primary Client prospect, I want to understand the difference between Bookkeeping, Tax Strategy, and Tax Services, so that I know which services apply to my business.
17. As a visitor, I want smooth-scroll navigation, so that I can jump to specific sections (Services, About, Booking) without losing context.
18. As a visitor, I want the page to load fast, so that I don't abandon it while waiting.

### Luis (site owner)

19. As Luis, I want all contact form submissions delivered to admin@lualcabookkeeping.com, so that I never miss a lead.
20. As Luis, I want the Seasonal Banner to appear automatically between January 1 and April 15 each year, so that I don't have to manually toggle it.
21. As Luis, I want the site to reflect a premium charcoal, gold, and off-white aesthetic, so that it signals the same professionalism as the firms I aspire to compete with.
22. As Luis, I want all copy to exist in both English and Spanish locale files, so that the bilingual experience is complete and accurate.
23. As Luis, I want Cal.com to handle Appointment confirmations and reminders, so that I don't have to manage scheduling manually.

## Implementation Decisions

### Module 1 — i18n Layer
- `next-intl` handles all internationalisation. Locale-prefixed routes: `/en/` and `/es/`.
- All copy lives in `messages/en.json` and `messages/es.json`. No CMS.
- Middleware detects browser locale and redirects to the appropriate prefix on first visit.
- A locale switcher component is available in the Navigation and Footer.

### Module 2 — Design System
- Tailwind CSS config defines a fixed token set: off-white background, charcoal text/UI, gold accent for CTAs and highlights.
- Shared primitives: `Button` (primary/secondary variants), `Card`, `Section` (handles vertical padding and max-width), `Container`.
- Typography scale is defined in Tailwind config, not ad hoc.

### Module 3 — Navigation
- Sticky top nav. Contains: logo (left), smooth-scroll section links (centre), locale switcher + "Book a Consultation" CTA button (right).
- On mobile: hamburger menu collapses section links. CTA remains visible.
- "Book a Consultation" scrolls to the Booking & Contact section.

### Module 4 — Hero Section
- Identity-led headline surfaces the bilingual/Texas business owner USP directly.
- Primary CTA: "Book a Free Consultation" — smooth-scrolls to Cal.com embed.
- Secondary CTA: "Get in touch" — smooth-scrolls to contact form.

### Module 5 — Services Section
- Grid of 5 service cards: Bookkeeping, Tax Services, Tax Strategy, Payroll Services, LLC Formation.
- Each card: icon, title, one-line description from locale file.
- No pricing shown. Cards do not link anywhere (no service detail pages at launch).

### Module 6 — About Section
- Luis's bio, bilingual USP, and trust signals (years of experience, client count if available, languages spoken).
- No professional photography required at launch; generated/illustrative image acceptable.

### Module 7 — Testimonials Section
- 3 testimonials. Copy sourced from locale files (translated into both languages).
- Simple card layout: quote, name, and optional role/business type.

### Module 8 — Seasonal Banner
- Renders between January 1 and April 15 inclusive. Hidden outside this range.
- Logic isolated in a pure function: `isInTaxSeason(date: Date): boolean`.
- Banner contains a tax season headline, deadline note, and CTA to the Booking section.
- Positioned above the Hero or as a top-of-page announcement strip.

### Module 9 — Booking & Contact Section
- Two subsections: Cal.com embed (left/top) and contact form (right/bottom).
- Cal.com embed: inline embed of Luis's consultation calendar.
- Contact form fields: Full name, Email, Phone (optional), Service interest (select: Bookkeeping, Tax Services, Tax Strategy, Payroll Services, LLC Formation, Other), Message.
- On submit: calls Contact Form Server Action, shows success or error state.

### Module 10 — Contact Form Server Action
- Next.js Server Action. Validates all required fields server-side.
- On valid input: calls Resend API, sends notification email to `admin@lualcabookkeeping.com` with all form fields.
- Returns typed success/error result to the client — no unstructured throws.
- Does not store submissions in a database (email only, at launch).

### Module 11 — Footer
- Logo, section nav links, contact email, locale switcher, copyright line.
- No social media links at launch (no social presence exists).

## Testing Decisions

A good test verifies external behaviour from the caller's perspective — it does not assert on internal implementation details, file structure, or private functions. Tests should pass regardless of how a module is refactored internally, as long as the contract is preserved.

### Modules with unit tests

**`isInTaxSeason(date: Date): boolean`**
- Returns `true` for January 1, February 15, April 15.
- Returns `false` for April 16, December 31, June 1.
- Correctly handles year boundaries (Dec 31 → Jan 1).

**Contact Form Server Action**
- Given valid input (all required fields present, valid email format): calls Resend with the correct recipient (`admin@lualcabookkeeping.com`) and returns a success result.
- Given missing required fields: returns a validation error result without calling Resend.
- Given an invalid email format: returns a validation error result without calling Resend.
- Given a Resend API failure: returns an error result without throwing.
- Resend is mocked at the module boundary in all tests.

### No unit tests needed
All other modules are UI rendering and composition. They are best verified by running the app and visually inspecting the output. No snapshot tests.

## Out of Scope

- **Client Portal** — authenticated document management surface. Deferred to a later phase.
- **Individual service pages** — `/services/bookkeeping`, etc. for SEO. Deferred post-launch.
- **CMS / content editing by Luis** — all copy is code-managed.
- **Google Business Profile** — separate from this build; Luis to set up independently.
- **Social media presence** — no social links at launch.
- **Blog or content marketing** — not in scope.
- **Pricing pages** — contact-for-quote model; no pricing shown.
- **Payment processing** — no payments taken through the site.
- **User accounts or authentication** — no auth at launch.

## Further Notes

- Domain: `lualcabookkeeping.com`. Contact email: `admin@lualcabookkeeping.com`.
- Luis has existing logo files he designed. The design system should accommodate his logo once provided.
- Cal.com must be configured by Luis (connecting his calendar, setting consultation duration and availability) before the embed can go live. This is a Luis task, not a dev task.
- Resend requires a verified sending domain. `lualcabookkeeping.com` must be verified in Resend before the contact form goes live in production.
- ADR-0001 records the decision to build a fully bilingual EN/ES site via `next-intl`. See `docs/adr/0001-full-bilingual-en-es.md`.
