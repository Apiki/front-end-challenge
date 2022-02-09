import Link, { LinkProps as NextLinkProps } from "next/link";
import { AnchorHTMLAttributes, ButtonHTMLAttributes, ReactText } from "react";
import { IconBaseProps } from "react-icons";
import { BiLoaderAlt } from "react-icons/bi";

import styles from "./styles.module.scss";

//------ Types ------
type HTMLButtonProps = ButtonHTMLAttributes<HTMLButtonElement>;
type HTMLAnchorProps = AnchorHTMLAttributes<HTMLAnchorElement>;

type SharedProps = {
  variant?: "primary" | "secondary";
  children: ReactText | Array<ReactText | undefined>;
  isLoading?: boolean;
  iconLeft?: React.ComponentType<IconBaseProps>;
};
type LinkProps = Omit<NextLinkProps, "passHref" | "locale">;

type ButtonProps = HTMLButtonProps & SharedProps;
type AnchorProps = HTMLAnchorProps & SharedProps & LinkProps;

type PolymorphicButton = {
  (props: ButtonProps): JSX.Element | null;
  (props: AnchorProps): JSX.Element | null;
};

//------ Helpers ------
const capitalize = (text: string) =>
  text.charAt(0).toUpperCase() + text.slice(1);

//------ Component ------
export const Button: PolymorphicButton = ({
  variant = "primary",
  className = "",
  isLoading,
  iconLeft: IconLeft,
  children,
  ...rest
}) => {
  const isLink = "href" in rest;

  const variantClassName = styles[`btn${capitalize(variant)}`];
  const classNames =
    `${styles.btn} ${variantClassName}` +
    (IconLeft ? ` ${styles.btnIconLeft}` : "") +
    (isLoading ? ` ${styles.btnLoading}` : "") +
    className;

  function renderContent() {
    return (
      <>
        {IconLeft && <IconLeft size="1.125rem" />}
        {children}
        {isLoading && <BiLoaderAlt size="2rem" className={styles.btnLoader} />}
      </>
    );
  }

  if (!isLink)
    return (
      <button className={classNames} {...(rest as HTMLButtonProps)}>
        {renderContent()}
      </button>
    );

  const { href, as, replace, scroll, shallow, prefetch, ...anchorProps } = rest;
  const linkProps = { href, as, replace, scroll, shallow, prefetch };

  return (
    <Link {...linkProps}>
      <a className={classNames} {...anchorProps}>
        {renderContent()}
      </a>
    </Link>
  );
};
