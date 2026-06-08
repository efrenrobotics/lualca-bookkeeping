import { useTranslations } from "next-intl";
import { Section } from "@/components/ui/section";
import { Button } from "@/components/ui/button";

export function Hero() {
  const t = useTranslations("Hero");
  return (
    <Section
      id="top"
      className="relative overflow-hidden pt-16 sm:pt-20 lg:pt-24"
    >
      {/* Soft gold halo — restrained warmth behind the headline. */}
      <div
        aria-hidden
        className="pointer-events-none absolute -top-32 right-[-10%] h-[36rem] w-[36rem] rounded-full bg-gold/10 blur-3xl"
      />
      <div className="relative max-w-3xl">
        <p className="text-eyebrow font-semibold uppercase text-gold-600">
          {t("eyebrow")}
        </p>
        <h1 className="mt-5 font-serif text-display text-charcoal-900">
          {t("headline")}
        </h1>
        <p className="mt-6 max-w-2xl text-lead text-charcoal-600">
          {t("subhead")}
        </p>
        <div className="mt-9 flex flex-col gap-3 sm:flex-row sm:items-center">
          <Button href="#booking" size="lg">
            {t("primaryCta")}
          </Button>
          <Button href="#contact" variant="secondary" size="lg">
            {t("secondaryCta")}
          </Button>
        </div>
      </div>
    </Section>
  );
}
