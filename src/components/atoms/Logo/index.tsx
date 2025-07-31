import { memo } from "react";
import logo from "~assets/svg/logo-mark.svg";
import { applyClassNameIfTrue, renderElementIfTrue } from "~utils";
import type { ILogo } from "./types";
import "./styles.scss";

export const Logo = memo(function Logo({ iconOnly, lightColor, size }: ILogo) {
    return (
        <div className="logo">
            <img
                src={logo}
                alt="Logo"
                loading="lazy"
                className={"logo__img" + applyClassNameIfTrue(size, `logo__img--${size}`)}
            />
            {renderElementIfTrue(
                !iconOnly,
                <span
                    className={
                        "logo__text" +
                        applyClassNameIfTrue(lightColor, "logo__text--light") +
                        applyClassNameIfTrue(size, `logo__text--${size}`)
                    }
                >
                    Apiki
                </span>
            )}
        </div>
    );
});
