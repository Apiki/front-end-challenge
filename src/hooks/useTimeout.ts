import { useCallback, useEffect, useRef } from "react";

const DEFAULT_DELAY = 600;

export const useTimeout = () => {
    const timeoutRef = useRef<NodeJS.Timeout | null>(null);

    const resetTimeout = useCallback(() => {
        if (timeoutRef.current) {
            clearTimeout(timeoutRef.current);

            timeoutRef.current = null;
        }
    }, []);
    const runTimeout = useCallback((callback: () => void, delay?: number) => {
        const delayValue = delay ?? DEFAULT_DELAY;

        timeoutRef.current = setTimeout(callback, delayValue);
    }, []);

    useEffect(() => {
        return () => resetTimeout();
    }, [resetTimeout]);

    return { resetTimeout, runTimeout };
};
