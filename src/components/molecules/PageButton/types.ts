import type { ButtonHTMLAttributes } from "react";
import type { IPhosphorIconsReact } from "~types";

export interface IPageButton
    extends Omit<ButtonHTMLAttributes<HTMLButtonElement>, "type" | "className">,
        Partial<IPhosphorIconsReact> {
    label?: number | string;
}
