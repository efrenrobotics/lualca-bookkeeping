import { useTranslations } from "next-intl";
import { Container } from "@/components/ui/container";
import { Button } from "@/components/ui/button";
import { LocaleSwitcher } from "@/components/locale-switcher";
import { Logo } from "@/components/logo";

/**
 * Minimal top bar for the walking skeleton — hosts the brand, locale switcher,
 * and primary CTA. Issue #5 replaces this with the full sticky nav (section
 * links + mobile hamburger). The "Book a Consultation" CTA targets #booking.
 */
export function SiteHeader() {
  const t = useTranslations("Nav");
  return (
    <header className="sticky top-0 z-40 border-b border-charcoal/10 bg-cream/80 backdrop-blur-md">
      <Container className="flex h-16 items-center justify-between">
        <Logo />
        <div className="flex items-center gap-3">
          <LocaleSwitcher />
          <Button href="#booking" size="md" className="hidden sm:inline-flex">
            {t("bookCta")}
          </Button>
        </div>
      </Container>
    </header>
  );
}
