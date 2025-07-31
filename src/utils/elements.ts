import type { ReactNode } from "react";

export const renderElementIfTrue = (condition: unknown, element: ReactNode, elseElement?: ReactNode) => {
    if (!condition) {
        return elseElement ?? null;
    }

    return element;
};
