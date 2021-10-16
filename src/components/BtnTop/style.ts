import styled from "styled-components";

const Container = styled.button`
    padding: 1rem;

    background-color: var(--secondary-color);
    border: none;
    border-radius: 50%;

    position: fixed;
    bottom: 1rem;
    right: 1rem;

    color: white;

    cursor: pointer;

    &::before {
        font-weight: bold;

        content: "/";
    }

    &::after {
        font-weight: bold;

        content: "\\005C";
    }
`;

export { Container };
