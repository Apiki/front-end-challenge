import { useCallback, useEffect, useMemo, useState, type PropsWithChildren } from "react";
import { BREAKPOINT } from "~utils";
import { INITIAL_SCROLL_POSITION, INITIAL_WIDTH_SIZE, ViewportContext, WINDOW_TOP } from "./constants";

export const ViewportContextProvider = ({ children }: PropsWithChildren) => {
    const [widthSize, setWidthSize] = useState(INITIAL_WIDTH_SIZE);
    const [scrollPosition, setScrollPosition] = useState(INITIAL_SCROLL_POSITION);

    const updateWidthSize = useCallback(() => setWidthSize(window.innerWidth), []);
    const updateScrollPosition = useCallback(() => setScrollPosition(window.scrollY), []);
    const scrollToTop = useCallback(() => window.scrollTo({ top: WINDOW_TOP, behavior: "smooth" }), []);
    const thresholdTrigger = useCallback(
        (type: "width" | "scroll", threshold: number, isBelow?: "isBelow") => {
            const value = type === "width" ? widthSize : scrollPosition;

            if (isBelow) {
                return value < threshold;
            }

            return value >= threshold;
        },
        [scrollPosition, widthSize]
    );
    const breakpointStatus = useMemo(
        () => ({
            sm: thresholdTrigger("width", BREAKPOINT.sm),
            md: thresholdTrigger("width", BREAKPOINT.md),
            lg: thresholdTrigger("width", BREAKPOINT.lg),
            xl: thresholdTrigger("width", BREAKPOINT.xl),
            "2xl": thresholdTrigger("width", BREAKPOINT["2xl"])
        }),
        [thresholdTrigger]
    );

    useEffect(() => {
        updateWidthSize();
        updateScrollPosition();

        window.addEventListener("resize", updateWidthSize);
        window.addEventListener("scroll", updateScrollPosition);

        return () => {
            window.removeEventListener("resize", updateWidthSize);
            window.removeEventListener("scroll", updateScrollPosition);
        };
    }, [updateScrollPosition, updateWidthSize]);

    return (
        <ViewportContext.Provider
            value={{ widthSize, scrollPosition, scrollToTop, thresholdTrigger, breakpointStatus }}
        >
            {children}
        </ViewportContext.Provider>
    );
};
