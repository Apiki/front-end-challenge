import React from "react";

import Spinner from "../../ui/Spinner";
import FallbackContainer from "../FallbackContainer";
import type { AsyncFallbackProps } from "./types";

const AsyncFallback: React.FC<AsyncFallbackProps> = ({
  isLoading,
  isError,
  errorContent = "Ocorreu um erro",
  loadingContent = <Spinner />,
  children,
  className,
}) => {
  if (isLoading) {
    return (
      <FallbackContainer className={className}>
        {loadingContent}
      </FallbackContainer>
    );
  }

  if (isError) {
    return (
      <FallbackContainer className={className}>
        {errorContent}
      </FallbackContainer>
    );
  }

  return <>{children}</>;
};

export default AsyncFallback;
