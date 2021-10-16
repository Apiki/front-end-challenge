import React from "react";
import { Link } from "react-router-dom";

import * as logo from "~/assets/logo-apiki-site-01-150x49.png";

import { Container } from "./style";

const Header = () => {
    return (
        <Container>
            <div className="logo">
                <Link to="/">
                    <img src={logo.default} alt="" />
                </Link>
            </div>
        </Container>
    );
};

export { Header };
