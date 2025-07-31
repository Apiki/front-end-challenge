import type { IconProps } from "@phosphor-icons/react";
import type { SVGProps } from "react";
import type { IPhosphorIconsReact } from "~types";

export interface IPhosphorIcon
    extends IPhosphorIconsReact,
        Pick<SVGProps<SVGSVGElement>, "className">,
        Pick<IconProps, "weight"> {}
