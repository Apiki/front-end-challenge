import clsx from "clsx";
import React from "react";

import type { FallbackContainerProps } from "./types";

const FallbackContainer: React.FC<FallbackContainerProps> = ({
  className,
  children,
}) => (
  <div
    className={clsx(
      "h-[70vh] overflow-hidden rounded-2xl",
      "border-slate-700/60 flex items-center justify-center",
      className,
    )}
  >
    {children}
  </div>
);

export default FallbackContainer;
