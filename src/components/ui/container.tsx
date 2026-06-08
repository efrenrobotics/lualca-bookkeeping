import type { ElementType, ReactNode } from "react";

/** Constrains content to the site max-width with responsive gutters. */
export function Container({
  as: Tag = "div",
  className = "",
  children,
}: {
  as?: ElementType;
  className?: string;
  children: ReactNode;
}) {
  return (
    <Tag className={`mx-auto w-full max-w-container px-6 sm:px-8 lg:px-10 ${className}`}>
      {children}
    </Tag>
  );
}
