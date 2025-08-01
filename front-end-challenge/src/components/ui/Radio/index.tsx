import { clsx } from "clsx";
import { forwardRef, type InputHTMLAttributes } from "react";

interface RadioProps extends InputHTMLAttributes<HTMLInputElement> {
  label: string;
  id: string;
}

const Radio = forwardRef<HTMLInputElement, RadioProps>(
  ({ id, label, className, ...props }, ref) => {
    return (
      <div className={clsx("flex items-center gap-2", className)}>
        <input
          type="radio"
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

Radio.displayName = "Radio";

export default Radio;
