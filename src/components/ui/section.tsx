import type { ReactNode } from "react";
import { Container } from "./container";

/**
 * A page section: owns vertical rhythm and (optionally) the max-width container.
 * Pass an `id` to make it a smooth-scroll anchor target for nav links.
 */
export function Section({
  id,
  className = "",
  contained = true,
  children,
}: {
  id?: string;
  className?: string;
  /** When false, render children full-bleed (caller supplies its own Container). */
  contained?: boolean;
  children: ReactNode;
}) {
  return (
    <section id={id} className={`py-20 sm:py-24 lg:py-28 ${className}`}>
      {contained ? <Container>{children}</Container> : children}
    </section>
  );
}
