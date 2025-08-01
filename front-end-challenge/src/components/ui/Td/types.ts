export interface TdProps extends React.HTMLAttributes<HTMLTableCellElement> {
  children: React.ReactNode;
  className?: string;
  colSpan?: number;
}
