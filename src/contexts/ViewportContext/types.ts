import type { BREAKPOINT } from "~utils";

export interface IViewportContext {
    widthSize: number;
    scrollPosition: number;
    scrollToTop: () => void;
    thresholdTrigger: (type: "width" | "scroll", threshold: number, isBelow?: "isBelow") => boolean;
    breakpointStatus: {
        [K in keyof typeof BREAKPOINT]: boolean;
    };
}
