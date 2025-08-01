import clsx from "clsx";
import { forwardRef, type InputHTMLAttributes } from "react";

export type InputProps = InputHTMLAttributes<HTMLInputElement> & {
  size?: "sm" | "md" | "lg";
  label?: string;
  error?: string;
};

const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ type = "text", size = "md", className, label, error, ...props }, ref) => {
    const sizeClasses: Record<string, string> = {
      sm: "h-7 w-40 md:w-56",
      md: "h-9 w-56 md:w-72",
      lg: "h-11 w-72 md:w-96",
    };

    return (
      <>
        <label className="text-white text-sm mb-[-12px]">{label}</label>
        <input
          ref={ref}
          type={type}
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
        <span className="text-red-500 text-sm mt-[-15px]">{error}</span>
      </>
    );
  },
);

Input.displayName = "Input";
export default Input;
