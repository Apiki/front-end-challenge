import React from "react";

import { toTop } from "~/utils/Position";

import { Container } from "./style";

const BtnTop = () => {
    return <Container onClick={toTop} />;
};

export { BtnTop };
