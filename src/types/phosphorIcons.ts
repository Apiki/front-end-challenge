import type { phosphorIconsReact } from "~utils";

export type PhosphorIconsReactType = keyof typeof phosphorIconsReact;

export interface IPhosphorIconsReact {
    icon: PhosphorIconsReactType;
}
