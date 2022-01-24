import styled from 'styled-components/macro'

export const ContainerArticleList = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    max-width: 900px;
    margin: 50px auto;
`

export const Container = styled.article`
    width: 100%;
    display: flex;
    align-items: center;
    padding: 10px;
    cursor: pointer;
    &:hover {
        background: #ddd;
    }
    @media screen and (max-width: 650px){
        flex-direction: column;
    }

`
export const ContainerImage = styled.div`
    display: flex;
    min-width: 300px;
    max-width: 300px;
    height: 157.5px;
`

export const Image = styled.img`
    min-height: 100%;
    min-width: 100%;
    object-fit: fill;    
`

export const ContainerInfo = styled.div`
    padding-left: 10px;
    display: flex;
    flex-direction: column;
`

export const Title = styled.h1`
    font-size: 1.5rem;
    height: 20%;
    padding: 20px 0;
    @media screen and (max-width: 650px){
        text-align: center;
    }
`
export const Description = styled.p`
    color: #555;
    height: 80%;
    text-align: justify;
    @media screen and (max-width: 650px){
        text-align: center;
    }
`
export const By = styled.p`
    font-weight: 600;
    margin: 10px 0;
`

