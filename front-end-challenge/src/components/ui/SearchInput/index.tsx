import clsx from "clsx";
import { forwardRef } from "react";

import type { SearchInputProps } from "./types";

const SearchInput = forwardRef<HTMLInputElement, SearchInputProps>(
  ({ placeholder = "Buscar…", size = "md", className, ...props }, ref) => {
    const sizeClasses: Record<string, string> = {
      sm: "h-7 w-40 md:w-56",
      md: "h-9 w-56 md:w-72",
      lg: "h-11 w-72 md:w-96",
    };

    return (
      <input
        ref={ref}
        type="search"
        placeholder={placeholder}
        className={clsx(
          "rounded-md border border-[#8A939D] bg-transparent",
          "px-3 text-sm font-inter placeholder:text-[#8A939D]",
          "placeholder:font-light placeholder:text-xs",
          "placeholder:text-inter focus:border-cyan-600",
          "focus:outline-none focus:ring-1 focus:ring-cyan-500",
          sizeClasses[size],
          className,
        )}
        {...props}
      />
    );
  },
);

SearchInput.displayName = "SearchInput";
export default SearchInput;
