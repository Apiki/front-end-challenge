import clsx from "clsx";
import { motion } from "framer-motion";
import type { HTMLAttributes, ReactNode } from "react";
import { v4 as uuidv4 } from "uuid";

import { containerAnimation, itemAnimation } from "./animation";

type ListProps<T> = {
  items: T[];
  className?: string;
  children: (item: T, index: number) => ReactNode;
} & Omit<HTMLAttributes<HTMLUListElement>, "children">;

export function List<T>({
  items,
  className,
  children,
  ...props
}: ListProps<T>) {
  return (
    <ul className={clsx("mt-8 w-full px-4 space-y-4", className)} {...props}>
      <motion.div
        variants={containerAnimation}
        initial="hidden"
        animate="visible"
        className="flex flex-col gap-4 w-full"
      >
        {items.map((item, idx) => (
          <motion.li
            key={uuidv4()}
            variants={itemAnimation}
            className="flex items-center justify-center"
          >
            {children(item, idx)}
          </motion.li>
        ))}
      </motion.div>
    </ul>
  );
}
