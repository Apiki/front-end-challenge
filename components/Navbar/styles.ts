import styled from 'styled-components'

export const Container = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: #0093E9;
    background-image: linear-gradient(70deg, #0093E9 0%, #87e4da 100%);
    padding: 1rem 8rem;

    @media (max-width: 620px){
        padding: 0.5rem 1.5rem;
    }
`

export const Menu = styled.div`
    display: flex;
    color: white;
`

export const Icon = styled.a`
    display: flex;
    margin-left: 1rem;
    font-size: larger;
    cursor: pointer;
`