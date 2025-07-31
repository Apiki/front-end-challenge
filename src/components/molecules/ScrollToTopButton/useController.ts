import { useCallback, useContext, useEffect } from "react";
import { ViewportContext } from "~contexts";
import { useToggle } from "~hooks";
import { DELAY, SCROLL_THRESHOLD } from "./constants";

export const useController = () => {
    const { scrollToTop, thresholdTrigger } = useContext(ViewportContext);
    const { state: buttonIsRendered, updateState: updateButtonRender } = useToggle(undefined, true);

    const isScrolled = thresholdTrigger("scroll", SCROLL_THRESHOLD);
    const updateButtonRenderOnScroll = useCallback(() => {
        if (buttonIsRendered.immediate !== isScrolled)
            updateButtonRender(isScrolled, undefined, {
                value: DELAY,
                applyWhenFrom: true
            });
    }, [buttonIsRendered.immediate, isScrolled, updateButtonRender]);
    const handleClick = useCallback(() => {
        scrollToTop();

        window.history.pushState({}, document.title, window.location.pathname + window.location.search);
    }, [scrollToTop]);

    useEffect(updateButtonRenderOnScroll, [updateButtonRenderOnScroll]);

    return { buttonIsRendered, handleClick };
};
