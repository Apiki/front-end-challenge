import styled from "styled-components";

export const ItemCard = styled.div`
    display: flex;
    gap: 20px;
    margin-bottom: 20px;
    @media(max-width: 850px) {
        flex-direction: column;
    }
    figure {
        img {
            width: 350px;
            max-width: 350px;
            border-radius: 10px;
            transition: transform .3s;
            &:hover {
                transform: scale(1.1);
            }
            @media(max-width: 850px) {
                width: 100%;
            }
        }
    }
    h2 {
        font-size: 17px;
        line-height: 1.6;
        color: #53585c;
        font-weight: 300;
        margin-top: 7px;
    }
`;

export const ContainerHome = styled.div`
    a {
        color: #000;
        text-decoration: none;
    }
`;