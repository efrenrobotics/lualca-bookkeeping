"use client";

import { useLocale, useTranslations } from "next-intl";
import { useParams } from "next/navigation";
import { useTransition } from "react";
import { routing } from "@/i18n/routing";
import { usePathname, useRouter } from "@/i18n/navigation";

/**
 * Toggles between English and Spanish while staying on the current page.
 * Reused by the Navigation (#5) and Footer (#12).
 */
export function LocaleSwitcher() {
  const t = useTranslations("LocaleSwitcher");
  const active = useLocale();
  const router = useRouter();
  const pathname = usePathname();
  const params = useParams();
  const [isPending, startTransition] = useTransition();

  function switchTo(locale: string) {
    if (locale === active) return;
    startTransition(() => {
      // @ts-expect-error -- params carry the route's dynamic segments verbatim.
      router.replace({ pathname, params }, { locale });
    });
  }

  return (
    <div
      role="group"
      aria-label={t("label")}
      className="inline-flex items-center rounded-full border border-charcoal/15 p-0.5 text-small"
    >
      {routing.locales.map((locale) => {
        const isActive = locale === active;
        return (
          <button
            key={locale}
            type="button"
            onClick={() => switchTo(locale)}
            disabled={isPending}
            aria-current={isActive ? "true" : undefined}
            className={`rounded-full px-3 py-1 font-medium uppercase tracking-wide transition-colors ${
              isActive
                ? "bg-charcoal text-cream"
                : "text-charcoal-400 hover:text-charcoal"
            }`}
          >
            {locale}
          </button>
        );
      })}
    </div>
  );
}
