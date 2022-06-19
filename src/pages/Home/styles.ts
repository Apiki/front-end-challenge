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
    grid-template-columns: 100%;
    grid-template-rows: repeat(4, auto);
    gap: ${({ theme }) => theme.shape.spacing.gap.big};
    background-color: ${({ theme }) => theme.color_palette.surface.background};
`

export const PageCounter = styled.h1`
    font-family: ${({ theme }) => theme.typography.family};
    font-weight: ${({ theme }) => theme.typography.weight.medium};
    font-size: ${({ theme }) => theme.typography.size.variant.counter};
    color: ${({ theme }) => theme.color_palette.text.secondary};
    text-align: center;
`

export const InputSearch = styled.input`
    width: 100%;
    height: 3.5rem;
    padding: 0.25rem 1rem;
    background-color: ${({ theme }) => theme.color_palette.surface.card};
    border: none;
    border-radius: ${({ theme }) => theme.shape.border.radius.normal};
    outline: 0;
    font-family: ${({ theme }) => theme.typography.family};
    font-weight: ${({ theme }) => theme.typography.weight.medium};
    font-size: ${({ theme }) => theme.typography.size.text};
    color: ${({ theme }) => theme.color_palette.text.primary};
`

export const List = styled.ul`
    width: 100%;
    height: auto;
    padding: 0 ${({ theme }) => theme.shape.spacing.gap.big};
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(18rem, 1fr));
    justify-content: center;
    justify-items: center;
    gap: ${({ theme }) => theme.shape.spacing.normal};
`

export const ButtonBox = styled.div`
    width: auto;
    height: auto;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    gap: ${({ theme }) => theme.shape.spacing.normal};
`

export const PageButton = styled.button`
    width: 16rem;
    height: 4rem;
    margin: 0 auto;
    display: grid;
    grid-template-columns: 100%;
    grid-template-rows: 100%;
    place-items: center;
    border: ${({ theme }) => theme.shape.border.size} solid ${({ theme }) => theme.color_palette.surface.card};
    border-radius: ${({ theme }) => theme.shape.border.radius.normal};

    span {
        font-family: ${({ theme }) => theme.typography.family};
        font-weight: ${({ theme }) => theme.typography.weight.medium};
        font-size: ${({ theme }) => theme.typography.size.text};
        color: ${({ theme }) => theme.color_palette.text.secondary};
    }
`