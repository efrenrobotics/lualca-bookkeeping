import type { AnchorHTMLAttributes, ButtonHTMLAttributes, ReactNode } from "react";

type Variant = "primary" | "secondary";
type Size = "md" | "lg";

const base =
  "inline-flex items-center justify-center gap-2 rounded-full font-medium tracking-tight transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold focus-visible:ring-offset-2 focus-visible:ring-offset-cream disabled:opacity-50 disabled:pointer-events-none";

const variants: Record<Variant, string> = {
  // Gold CTA — the primary conversion action.
  primary: "bg-gold text-charcoal-900 hover:bg-gold-light shadow-sm",
  // Charcoal outline — secondary, lower emphasis.
  secondary:
    "border border-charcoal/20 text-charcoal hover:border-charcoal/40 hover:bg-charcoal/5",
};

const sizes: Record<Size, string> = {
  md: "h-11 px-5 text-small",
  lg: "h-[3.25rem] px-7 text-body",
};

type BaseProps = {
  variant?: Variant;
  size?: Size;
  className?: string;
  children: ReactNode;
};

type ButtonAsButton = BaseProps & { href?: undefined } & ButtonHTMLAttributes<HTMLButtonElement>;
type ButtonAsAnchor = BaseProps & { href: string } & AnchorHTMLAttributes<HTMLAnchorElement>;

/** Renders an <a> when `href` is present (e.g. smooth-scroll CTAs), else a <button>. */
export function Button(props: ButtonAsButton | ButtonAsAnchor) {
  const { variant = "primary", size = "md", className = "", children } = props;
  const cls = `${base} ${variants[variant]} ${sizes[size]} ${className}`;

  if (props.href !== undefined) {
    const { variant: _v, size: _s, className: _c, children: _ch, ...rest } = props;
    return (
      <a className={cls} {...rest}>
        {children}
      </a>
    );
  }

  const { variant: _v, size: _s, className: _c, children: _ch, ...rest } = props;
  return (
    <button className={cls} {...rest}>
      {children}
    </button>
  );
}
