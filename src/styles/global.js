import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
    @import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@300;400;500&display=swap');
    
    :root {
        --background-white: #FFF;
        --background-grey: #87868a;

        --black: #000;
        --white: #FFF;

        --primary: #dc8611;
        --secondary: #f6d82a;
    }

    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        font-family: 'Montserrat', sans-serif;
        max-width: 100%;
    }
`;