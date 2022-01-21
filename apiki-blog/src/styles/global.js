import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        text-decoration: none;
        list-style: none;
    }

    body{
        width: 100%;
        height: 100%;
        font-family: Montserrat,Helvetica,Arial,sans-serif;
        background: #eee;
    }
`