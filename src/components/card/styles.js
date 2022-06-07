import styled from "styled-components"

export const CardContainer = styled.div`
    width: 300px;
    height: 300px;
    box-sizing: border-box ;    
    font-family: 'Roboto', sans-serif;
    margin-bottom: 10px;
    display: flex;
    justify-content: space-between;
    flex-direction: column;
    padding: 0px;
    border-radius: 4px 4px 0px 0px;
    margin: 10px;
    figure{
        border-radius: 4px 4px 0px 0px;
        width: 100%;
        height: 200px;
        overflow: hidden;
        display: flex;
        justify-content: center;
        margin: 0px;
        img{
            width: 100%;
            height: auto;
        }
    }
    h3{
        margin: 1rem;
        max-width: 100%;
    }
`