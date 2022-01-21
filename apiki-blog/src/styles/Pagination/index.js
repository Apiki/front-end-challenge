import styled from "styled-components/macro";

export const ContainerPageList = styled.div`
    display: flex;
    padding: 10px;
    width: 100%;
    justify-content: center;
`

export const NumberPage = styled.div`
    width: 20px;
    height: 20x;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    background: ${props => props.active ? '#888' : '#FFF'};
    &:hover {
        background: #eee;
    }
`