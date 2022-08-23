import styled from "styled-components";

export const ContainerHeader = styled.div`
    background: var(--background-grey);
    height: 60px;
    display: flex;
    padding: 10px;
    align-items: center;
    padding: 0 35px;
    @media(max-width: 850px) {
        height: auto;
        padding: 35px;
        width: 100%;
    }
    ul {
        display: flex;
        list-style: none;
        gap: 20px;
        max-width: 1200px;
        @media(max-width: 850px) {
            flex-direction: column;
            width: 100%;
            max-width: 100%;
        }
        > li {
            > a {
                text-decoration: none;
                color: #fff;
                text-transform: uppercase;
                font-size: 13px;
                font-weight: 500;
                letter-spacing: 1px;
            }
        }
    }
`;