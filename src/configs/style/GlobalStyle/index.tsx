import { createGlobalStyle } from "styled-components";

import { primaryColor, secondaryColor } from "~/configs/style/Variables";

const GlobalStyle = createGlobalStyle`
    :root {
        --primary-color: ${primaryColor};
        --secondary-color: ${secondaryColor};
    }

    * {
        box-sizing: border-box;
        font-family: "Montserrat", sans-serif;
        font-size: 16px;

        scroll-behavior: smooth;
    }

    body {
        margin: 0;
    }

    h1,
    h2 {
        margin: 1rem 0;

        border-bottom: 2px solid var(--secondary-color);

        font-size: 130%;
    }

    p {
        font-size: 100%;
    }

    a {
        color: inherit;
        text-decoration: none;

        &:visited {
            color: inherit;
        }
    }
`;

export { GlobalStyle };
