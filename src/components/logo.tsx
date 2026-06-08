import { useTranslations } from "next-intl";

/**
 * Placeholder brand mark. Luis's real logo files drop in here later
 * (swap the monogram + wordmark for the supplied asset) without touching callers.
 */
export function Logo({ className = "" }: { className?: string }) {
  const t = useTranslations("Nav");
  return (
    <span className={`inline-flex items-center gap-2.5 ${className}`}>
      <span
        aria-hidden
        className="grid h-9 w-9 place-items-center rounded-md bg-charcoal font-serif text-lead leading-none text-gold"
      >
        L
      </span>
      <span className="font-serif text-h3 leading-none tracking-tight text-charcoal-900">
        {t("brand")}
      </span>
    </span>
  );
}
