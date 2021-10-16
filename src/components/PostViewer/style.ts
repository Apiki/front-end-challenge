import styled from "styled-components";

const Container = styled.div`
    min-height: 100vh;
    min-width: 80vw;
    margin: 0 10%;

    display: flex;
    flex-flow: column;
    gap: 1rem;

    @media screen and (max-width: 800px) {
        margin: 0 5%;
    }
`;

const GridContainer = styled.div`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-template-rows: auto;
    gap: 1rem;

    @media screen and (max-width: 800px) {
        grid-template-columns: 1fr;
    }
`;

const MoreButton = styled.button`
    margin: 0 20%;
    padding: 0.5rem;

    border: 2px solid var(--secondary-color);
    border-radius: 0.5rem;

    color: var(--secondary-color);
    font-weight: bold;

    cursor: pointer;
`;

export { Container, GridContainer, MoreButton };
