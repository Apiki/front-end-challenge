import styled, { keyframes } from "styled-components";

const spin = keyframes`
    0% {
        transform: rotate(0deg);
    }
    100% {
        transform: rotate(360deg);
    }
`;

const SpinnerContainer = styled.div`
    height: 100vh;
    width: 100vw;

    position: fixed;
    top: 0;
    left: 0;

    display: flex;
    align-items: center;
    justify-content: center;

    background-color: #e1e1e1e1;

    z-index: 3;
`;

const Spinner = styled.div`
    height: 30px;
    width: 30px;
    margin-top: 15px;
    margin-left: auto;
    margin-right: auto;
    margin-bottom: 0;

    position: relative;

    border-top: 16px solid var(--secondary-color);
    border-left: 16px solid var(--primary-color);
    border-right: 16px solid var(--primary-color);
    border-bottom: 16px solid var(--primary-color);
    border-radius: 50%;

    animation: ${spin} 1s linear infinite;
    z-index: 4;
`;

export { Spinner, SpinnerContainer };
