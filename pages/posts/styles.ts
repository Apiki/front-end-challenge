import styled from 'styled-components'

export const Container = styled.div`
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    padding: 2rem 3rem;

    @media (max-width: 920px){
        padding: 0.5rem 1.5rem;
    }
`