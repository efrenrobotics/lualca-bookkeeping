import { defineRouting } from "next-intl/routing";

export const routing = defineRouting({
  locales: ["en", "es"],
  defaultLocale: "en",
  // Always show the locale prefix (/en, /es) so inbound links are stable.
  localePrefix: "always",
});

export type Locale = (typeof routing.locales)[number];
