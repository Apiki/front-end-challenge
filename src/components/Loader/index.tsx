import React from "react";

import { Spinner, SpinnerContainer } from "./style";

const Loader = () => {
    return (
        <SpinnerContainer>
            <Spinner />
        </SpinnerContainer>
    );
};

export { Loader };
