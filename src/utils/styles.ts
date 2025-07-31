export const BREAKPOINT = {
    sm: 640,
    md: 768,
    lg: 1024,
    xl: 1280,
    "2xl": 1536
};

export const applyClassNameIfTrue = (
    condition: unknown,
    className: string,
    elseClassName?: string,
    noSpace?: "noSpace"
) => {
    const space = noSpace ? "" : " ";

    if (!condition) {
        if (elseClassName) {
            return `${space}${elseClassName}`;
        }

        return "";
    }

    return `${space}${className}`;
};
