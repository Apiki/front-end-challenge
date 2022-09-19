import styled from 'styled-components'

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    position: relative;
`

export const Content = styled.div`
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    padding: 2rem 3rem;
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
`