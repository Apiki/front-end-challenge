import { memo } from "react";
import { PhosphorIcon } from "~components/atoms";
import { renderElementIfTrue } from "~utils";
import type { IPageButton } from "./types";
import "./styles.scss";

export const PageButton = memo(function PageButton({ icon, label, ...rest }: IPageButton) {
    return (
        <button
            type="button"
            className="page-button"
            {...rest}
        >
            {renderElementIfTrue(
                icon,
                <PhosphorIcon
                    weight="bold"
                    icon={icon!}
                    className="page-button__icon"
                />
            )}
            {renderElementIfTrue(label, label)}
        </button>
    );
});
