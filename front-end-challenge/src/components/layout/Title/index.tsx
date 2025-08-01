import clsx from "clsx";

import type { TitlePageProps } from "./types";

function Title({ title, className }: TitlePageProps) {
  return (
    <h1
      className={clsx(
        "text-base font-semibold tracking-wide font-poppins color-light",
        className,
      )}
    >
      {title}
    </h1>
  );
}

export default Title;
