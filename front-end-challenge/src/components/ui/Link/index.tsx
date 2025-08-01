// src/components/ui/Link.tsx
import clsx from "clsx";
import React from "react";
import { Link as RouterLink } from "react-router-dom";

import type { LinkProps } from "./types";

export const Link: React.FC<LinkProps> = ({
  href,
  children,
  className,
  ...rest
}) => (
  <RouterLink
    to={href}
    className={clsx("text-primary underline underline-offset-3", className)}
    {...rest}
  >
    {children}
  </RouterLink>
);
