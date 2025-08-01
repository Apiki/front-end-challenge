import clsx from "clsx";
import { useNavigate } from "react-router-dom";

import type { LinkCardProps } from "./types";

export function LinkCard({
  href,
  title,
  icon,
  className,
  target,
  ...props
}: LinkCardProps) {
  const navigate = useNavigate();

  return (
    <button
      onClick={() => (target === "_blank" ? window.open(href) : navigate(href))}
      className={clsx(
        "h-28 w-full flex items-center bg-[#1b1b1b]",
        "hover:bg-[#2b2b2b] transition rounded-lg",
        className,
      )}
      {...props}
    >
      <div className="w-full h-full flex items-center gap-2">
        <div className="w-24 h-full rounded-lg overflow-hidden p-0.5 bg-white flex items-center justify-center">
          {icon}
        </div>
        <span className="ml-4 text-xl font-medium">{title}</span>
      </div>
    </button>
  );
}
