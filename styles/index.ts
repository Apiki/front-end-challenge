import styled from 'styled-components'

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    position: relative;
`

export const Content = styled.div`
    max-width: 60rem;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    padding: 2rem 3rem;
    margin: 0 auto;
    margin-bottom: 5rem;

    @media (max-width: 920px){
        padding: 0.5rem 1.5rem;
    }
`

export const ContentButton = styled.div`
    width: 6.5rem;
    display: flex;
    flex-direction: column;
    align-content: center;
    align-items: center;
    position: absolute;
    bottom: 1rem;
`

export const Button = styled.button`
    display: flex;
    flex-direction: column;
    align-items: center;
    font-weight: 500;
    background-image: linear-gradient(94.25deg,#0f9ce7 0%,#44bce2 51.04%,#82e1db 100%);
    -webkit-background-clip: text;
    background-clip: text;
    font-weight: 500;
    color: transparent;
    -webkit-text-decoration-line: underline;
    -webkit-text-decoration-line: underline;
    text-decoration-line: underline;

    &: hover {
        color: #0f9ce7;
    }
`