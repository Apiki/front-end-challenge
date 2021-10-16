import styled from "styled-components";

const Avatar = styled.img`
    border-radius: 50%;
`;

const Container = styled.div`
    margin-bottom: 4rem;
    padding: 1rem;

    background-color: var(--secondary-color);

    color: white;
    text-align: center;
`;

const Name = styled.h1`
    margin: 0.5rem 10%;

    border-bottom: 2px solid white;

    font-size: 250%;
`;

export { Avatar, Container, Name };
