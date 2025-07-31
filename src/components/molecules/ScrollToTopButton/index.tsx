import { PhosphorIcon } from "~components/atoms";
import { applyClassNameIfTrue } from "~utils";
import { useController } from "./useController";
import "./styles.scss";

export const ScrollToTopButton = () => {
    const { buttonIsRendered, handleClick } = useController();

    if (!buttonIsRendered.delayed) return null;

    return (
        <button
            type="button"
            aria-label="Scroll to top"
            onClick={handleClick}
            className={`scroll-to-top-button scroll-to-top-button--${applyClassNameIfTrue(buttonIsRendered.immediate, "entering", "exiting", "noSpace")}`}
        >
            <PhosphorIcon
                icon="CaretUpIcon"
                weight="bold"
                className="scroll-to-top-button__icon"
            />
        </button>
    );
};
