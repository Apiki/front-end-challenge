import styled from "styled-components"

export const ContainerPage = styled.div`
    width: 100vw;
    height: fit-content;
    min-height: 100vh;
    background-color: #f2f2f2;
    display: flex;
    flex-direction: column;
    font-family: 'Roboto', sans-serif;
    align-items: center;
    box-sizing: border-box;
    h1{
        text-align: center;
    }
    button{
        width: 100%;
        max-width: 420px;
    }
    .container__cards{
        width: 100vw;
        height: fit-content;
        box-sizing: border-box;
        display: flex;
        flex-direction: column;
        align-items: center;
        @media screen  and (min-width: 640px){
            flex-direction: row;
            padding: 10px;
            flex-wrap: wrap;
        }
    }
`