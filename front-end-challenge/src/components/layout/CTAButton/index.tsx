import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import clsx from "clsx";
import { motion } from "framer-motion";

import type { CTAButtonProps } from "./types";

export function CTAButton({ href, text, className }: CTAButtonProps) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={clsx(
        "flex items-center justify-center border",
        "border-white hover:bg-white hover:text-primary",
        "transition py-3 mt-5 rounded-full text-base sm:text-lg font-semibold",
        className,
      )}
    >
      <span className="mr-2">{text}</span>
      <motion.span
        animate={{ x: [0, 12] }}
        transition={{
          type: "spring",
          stiffness: 300,
          duration: 0.1,
          repeat: Infinity,
          repeatType: "reverse",
        }}
      >
        <ArrowForwardIosIcon fontSize="small" />
      </motion.span>
    </a>
  );
}
