export interface RadioProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  id: string;
  name: string;
  value: string;
  label: React.ReactNode;
  checked?: boolean;
  onChange?: React.ChangeEventHandler<HTMLInputElement>;
  className?: string;
}
