import React, { useEffect } from "react";
import { useHistory } from "react-router-dom";

import { Container } from "./style";

const NoPageFound = () => {
    const history = useHistory();

    useEffect(() => {
        setTimeout(() => history.push("/"), 3000);
    }, []);

    return (
        <Container>
            A página desejada não foi encontrada, redirecionando para a página
            inicial...
        </Container>
    );
};

export { NoPageFound };
