import type { InputHTMLAttributes } from "react";

export interface SearchInputProps
  extends Omit<InputHTMLAttributes<HTMLInputElement>, "type" | "size"> {
  placeholder?: string;
  size?: "sm" | "md" | "lg";
}
