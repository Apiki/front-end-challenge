import clsx from "clsx";

import type { ButtonProps } from "./types";

export default function Button({
  variant = "primary",
  size = "md",
  type = "button",
  className,
  children,
  ...props
}: ButtonProps) {
  const base =
    "rounded-lg font-medium focus:outline-none focus-visible:ring text-poppins";
  const variants: Record<string, string> = {
    primary:
      "bg-primary text-light hover:bg-primary/80 focus-visible:ring-primary/60",
    secondary:
      "bg-secondary text-light hover:bg-secondary/80 focus-visible:ring-secondary/60",
    tertiary:
      "bg-tertiary text-light hover:bg-tertiary/80 focus-visible:ring-tertiary/60",
  };
  const sizes: Record<string, string> = {
    sm: "px-3 py-1 text-sm",
    md: "px-5 py-1.5 text-sm",
    lg: "px-6 py-2 text-base",
  };

  return (
    <button
      type={type}
      className={clsx(base, variants[variant], sizes[size], className)}
      {...props}
    >
      {children}
    </button>
  );
}
