// Dependencies
import styled from "styled-components"

// Main
export const PageContainer = styled.section`
    width: 100%;
    height: auto;
    min-height: 100vh;
    padding:
        ${({ theme }) => theme.shape.spacing.variant.top} ${({ theme }) => theme.shape.spacing.normal}
        ${({ theme }) => theme.shape.spacing.variant.bottom} ${({ theme }) => theme.shape.spacing.normal}
    ;
    display: grid;
    place-items: center;
    background-color: ${({ theme }) => theme.color_palette.surface.background};

    div {
        width: 100%;
        height: auto;
        display: grid;
        grid-template-columns: 100%;
        grid-template-rows: repeat(2, auto);
        gap: ${({ theme }) => theme.shape.spacing.gap.big};
    }
`

export const MainInfo = styled.figure`
    width: 100%;
    height: auto;
    display: grid;
    grid-template-columns: 100%;
    grid-template-rows: repeat(2, auto);
    gap: ${({ theme }) => theme.shape.spacing.gap.normal};

    img {
        width: 100%;
        max-width: 80rem;
        height: 20rem;
        margin: 0 auto;
        border-radius: ${({ theme }) => theme.shape.border.radius.small};
    }

    figcaption {
        font-family: ${({ theme }) => theme.typography.family};
        font-weight: ${({ theme }) => theme.typography.weight.bold};
        font-size: ${({ theme }) => theme.typography.size.title};
        color: ${({ theme }) => theme.color_palette.text.primary};
        text-align: center;
    }
`

export const Content = styled.section`
    width: 100%;
    height: auto;
    font-family: ${({ theme }) => theme.typography.family};
    color: ${({ theme }) => theme.color_palette.text.primary};

    a {
        color: ${({ theme }) => theme.color_palette.text.link};
    }

    img {
        width: 100%;
        max-width: 20rem;
        height: 100%;
    }
`