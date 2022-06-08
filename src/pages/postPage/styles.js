import styled from "styled-components"

export const ContainerPage = styled.div`
    width: 100%;
    height: fit-content;
    min-height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    box-sizing: border-box;
    background-color: #e4ebf5;  
    padding: 1rem ;
    .div__post{
        display: flex;
        flex-direction: column;
        align-items: center;
        text-align: left;
        .div__author{
            display: flex;
            flex-direction: row-reverse;
            align-items: center;
            align-self: flex-end;
            margin: 1rem;
            img{
                height: 3rem;
                border-radius: 99999999px;
            }
            span{
                font-size: 0.9rem;
            }
        }
        .img__post{
        width: 80%;
        max-width: 420px;
        }
        .div__content{
        width: 100%;
        padding: 0;
        margin: 0;
        display: flex;
        flex-direction: column;
        margin-bottom: 2rem;
    }
    }
    
`