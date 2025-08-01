import clsx from "clsx";

import type { SpinnerProps } from "./types";

function Spinner({ className }: SpinnerProps) {
  return (
    <span
      className={clsx(
        "animate-spin rounded-full h-8 w-8",
        "border-4 border-gray-200 border-t-blue-500",
        className,
      )}
    ></span>
  );
}

export default Spinner;
