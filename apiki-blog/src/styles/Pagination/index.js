import styled from "styled-components/macro";

export const ContainerPageList = styled.div`
    display: flex;
    flex-wrap: wrap;
    padding: 10px;
    width: 100%;
    justify-content: center;
`

export const NumberPage = styled.div`
    width: 25px;
    height: 25x;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    font-weight: 600;
    margin: 0 1px 1px 0;
    background: ${props => props.active ? '#888' : '#ddd'};
    &:hover {
        background: #ccc;
    }
`