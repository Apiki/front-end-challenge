// Dependencies
import styled from "styled-components"

// Main
export const Container = styled.nav`
    position: absolute;
    top: 0;
    left: 0;
    z-index: 5;
    width: 100%;
    height: 6rem;
    padding: 1rem;
    display: grid;
    grid-template-columns: repeat(2, auto);
    grid-template-rows: auto;
    justify-content: center;
    align-items: center;
    background-color: ${({ theme }) => theme.color_palette.surface.background};

    img {
        width: 10rem;
        height: 3rem;
    }
`