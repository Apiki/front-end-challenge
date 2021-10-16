import React from "react";
import { Link } from "react-router-dom";

import * as logo from "~/assets/apiki-logo-pb-150x49.png";

import { Container } from "./style";

const Footer = () => {
    return (
        <Container>
            <Link to="/">
                <img src={logo.default} alt="" />
            </Link>
        </Container>
    );
};

export { Footer };
