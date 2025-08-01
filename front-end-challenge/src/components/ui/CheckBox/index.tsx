import { clsx } from "clsx";
import { forwardRef, type InputHTMLAttributes } from "react";

interface CheckboxProps extends InputHTMLAttributes<HTMLInputElement> {
  label: string;
  id: string;
}

const Checkbox = forwardRef<HTMLInputElement, CheckboxProps>(
  ({ id, label, className, ...props }, ref) => {
    return (
      <div className={clsx("flex items-center gap-2", className)}>
        <input
          type="checkbox"
          id={id}
          ref={ref}
          className="accent-blue-600 w-4 h-4 cursor-pointer"
          {...props}
        />
        <label
          htmlFor={id}
          className="text-sm text-white cursor-pointer select-none"
        >
          {label}
        </label>
      </div>
    );
  },
);

Checkbox.displayName = "Checkbox";

export default Checkbox;
