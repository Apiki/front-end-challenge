import { memo } from "react";
import { phosphorIconsReact } from "~utils";
import type { IPhosphorIcon } from "./types";

export const PhosphorIcon = memo(function PhosphorIcon({ icon, ...rest }: IPhosphorIcon) {
    const Element = phosphorIconsReact[icon];

    return <Element {...rest} />;
});
