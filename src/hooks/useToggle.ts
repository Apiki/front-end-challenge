import { useCallback, useState } from "react";
import type { IRender } from "~types";
import { useTimeout } from "./useTimeout";

type StateType<T extends boolean | undefined> = T extends true ? IRender["isRendered"] : boolean;
type CallbackType =
    | (() => void)
    | {
          fn: () => void;
          applyWhenFrom: boolean | "onBothTransitions";
      };
type DelayType = boolean | number | { value?: number; applyWhenFrom?: boolean | "onBothTransitions" };

const DEFAULT_VALUES = {
    initialState: false,
    delayTime: 400
};

export const useToggle = <T extends boolean | undefined = undefined>(initialState?: boolean, doubleMarkers?: T) => {
    const [state, setState] = useState<StateType<T>>(() => {
        const initialValue = initialState ?? DEFAULT_VALUES.initialState;

        if (doubleMarkers) {
            return {
                immediate: initialValue,
                delayed: initialValue
            } as StateType<T>;
        }

        return initialValue as StateType<T>;
    });
    const { resetTimeout, runTimeout } = useTimeout();

    const applyCallback = useCallback((currentState: boolean, nextState: boolean, callback?: CallbackType) => {
        if (callback) {
            if (typeof callback === "function") return callback();
            if (typeof callback === "object") {
                const { fn, applyWhenFrom } = callback;

                if (typeof applyWhenFrom === "boolean") {
                    if (applyWhenFrom === true) return currentState === true && nextState === false ? fn() : null;
                    if (applyWhenFrom === false) return currentState === false && nextState === true ? fn() : null;
                }
                if (applyWhenFrom === "onBothTransitions") return fn();
            }
        }
    }, []);
    const shouldApplyDelay = useCallback((currentState: boolean, nextState: boolean, delay?: DelayType) => {
        if (delay) {
            if (typeof delay === "boolean" || typeof delay === "number") return true;
            if (typeof delay === "object") {
                const { value, applyWhenFrom } = delay;

                if (typeof applyWhenFrom === "boolean") {
                    if (applyWhenFrom === true) return currentState === true && nextState === false;
                    if (applyWhenFrom === false) return currentState === false && nextState === true;
                }
                if (typeof value === "number" || applyWhenFrom === "onBothTransitions") return true;
            }
        }

        return false;
    }, []);
    const applyDelay = useCallback(
        (fn: () => void, delay?: DelayType) => {
            const delayTime = () => {
                if (delay) {
                    if (typeof delay === "number") return delay;
                    if (typeof delay === "object" && delay.value) return delay.value;
                }

                return DEFAULT_VALUES.delayTime;
            };

            runTimeout(fn, delayTime());
        },
        [runTimeout]
    );
    const updateState = useCallback(
        (applyValue?: boolean, callback?: CallbackType, delay?: DelayType) =>
            setState((prevState) => {
                const isObjectCurrentState = typeof prevState === "object";
                const currentState = (isObjectCurrentState ? prevState.immediate : prevState) as boolean;
                const nextState = applyValue ?? !currentState;

                if (currentState === nextState) return prevState;

                resetTimeout();
                applyCallback(currentState, nextState, callback);

                if (shouldApplyDelay(currentState, nextState, delay)) {
                    applyDelay(() => {
                        setState(
                            (prevState) =>
                                (typeof prevState === "object" ?
                                    { ...prevState, delayed: nextState }
                                :   nextState) as StateType<T>
                        );
                    }, delay);

                    return isObjectCurrentState ? { ...prevState, immediate: nextState } : prevState;
                }

                return (
                    isObjectCurrentState ?
                        { immediate: nextState, delayed: nextState }
                    :   nextState) as StateType<T>;
            }),
        [applyCallback, applyDelay, resetTimeout, shouldApplyDelay]
    );

    return { state, updateState };
};
