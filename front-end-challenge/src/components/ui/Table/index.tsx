import clsx from "clsx";
import { forwardRef } from "react";

import type { RowProps, SectionProps, TableProps } from "./types";

export const Table = forwardRef<HTMLDivElement, TableProps>(
  ({ children, className }, ref) => (
    <div
      className={clsx(
        "mt-10 rounded-2xl bg-dark border border-quaternary",
        "overflow-hidden",
        className,
      )}
    >
      <div ref={ref} className="max-h-[450px] overflow-y-auto">
        <table className="min-w-full w-full text-sm border-collapse divide-y divide-x divide-quaternary">
          {children}
        </table>
      </div>
    </div>
  ),
);
Table.displayName = "Table";

export function TableHead({ children }: SectionProps) {
  return (
    <thead className="text-slate-300">
      <tr className="divide-x divide-y divide-quaternary">{children}</tr>
    </thead>
  );
}

export function TableBody({ children }: SectionProps) {
  return (
    <tbody className="divide-x divide-y divide-quaternary">{children}</tbody>
  );
}

export const TableRow = forwardRef<HTMLTableRowElement, RowProps>(
  ({ children, className }, ref) => (
    <tr
      ref={ref}
      className={clsx(
        "hover:bg-slate-800/40 divide-x divide-y divide-quaternary",
        className,
      )}
    >
      {children}
    </tr>
  ),
);
TableRow.displayName = "TableRow";
