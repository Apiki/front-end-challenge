// Dependencies
import styled from "styled-components"

// Main
export const Container = styled.article`
    width: 18rem;
    height: auto;
    padding: ${({ theme }) => theme.shape.spacing.small};
    display: grid;
    grid-template-columns: 100%;
    grid-template-rows: repeat(3, auto);
    gap: ${({ theme }) => theme.shape.spacing.gap.normal};
    background-color: ${({ theme }) => theme.color_palette.surface.card};
    border-radius: ${({ theme }) => theme.shape.border.radius.normal};
`

export const Author = styled.header`
    width: 100%;
    height: auto;
    display: grid;
    grid-template-columns: auto max-content;
    grid-template-rows: auto;
    justify-content: space-between;
    align-items: center;

    span {
        font-family: ${({ theme }) => theme.typography.family};
        font-weight: ${({ theme }) => theme.typography.weight.extra_light};
        font-size: ${({ theme }) => theme.typography.size.legend};
        color: ${({ theme }) => theme.color_palette.text.secondary};
    }

    h1 {
        font-family: ${({ theme }) => theme.typography.family};
        font-weight: ${({ theme }) => theme.typography.weight.regular};
        font-size: ${({ theme }) => theme.typography.size.legend};
        color: ${({ theme }) => theme.color_palette.text.secondary};
    }
`

export const Thumbnail = styled.figure`
    width: 100%;
    height: auto;
    display: grid;
    grid-template-columns: 100%;
    grid-template-rows: repeat(2, auto);
    gap: ${({ theme }) => theme.shape.spacing.gap.small};

    img {
        width: 100%;
        height: 10rem;
        border-radius: ${({ theme }) => theme.shape.border.radius.small};
    }

    figcaption {
        width: 100%;
        height: 5rem;
        font-family: ${({ theme }) => theme.typography.family};
        font-weight: ${({ theme }) => theme.typography.weight.bold};
        font-size: ${({ theme }) => theme.typography.size.title};
        color: ${({ theme }) => theme.color_palette.text.primary};
        text-align: left;
    }
`

export const KnowMoreButton = styled.button`
    width: 8rem;
    height: 2.25rem;
    margin: 0 auto;
    border: ${({ theme }) => theme.shape.border.size} solid ${({ theme }) => theme.color_palette.surface.background};
    border-radius: ${({ theme }) => theme.shape.border.radius.normal};

    .page_url {
        width: 100%;
        height: 100%;
        display: grid;
        grid-template-columns: 100%;
        grid-template-rows: 100%;
        place-items: center;
        font-family: ${({ theme }) => theme.typography.family};
        font-weight: ${({ theme }) => theme.typography.weight.medium};
        font-size: ${({ theme }) => theme.typography.size.legend};
        color: ${({ theme }) => theme.color_palette.text.secondary};
    }
`