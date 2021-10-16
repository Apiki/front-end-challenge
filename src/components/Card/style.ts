import styled from "styled-components";

const BlurBar = styled.div`
    height: 100%;
    width: 100%;

    position: absolute;
    top: 0;
    left: 0;

    background: linear-gradient(0deg, white 0%, transparent 20%);
    filter: blur(1px);
`;

const Container = styled.button`
    padding: 1rem 0.75rem;

    display: flex;
    flex-flow: column;
    gap: 1rem;

    position: relative;

    background-color: transparent;
    border-top: none;
    border-bottom: none;
    border-left: 0.25rem solid var(--primary-color);
    border-right: 0.25rem solid var(--primary-color);
    border-radius: 0.5rem;
    box-shadow: 0px 0px 5px 1px #afaaaa;

    text-align: left;
    cursor: pointer;

    &.first {
        padding: 1rem 2rem;
        margin: 0 10%;

        p {
            font-size: 120%;
        }
    }

    @media screen and (max-width: 800px) {
        &.first {
            padding: 1rem 0.75rem;
            margin: 0;

            p {
                font-size: 100%;
            }
        }
    }
`;

const DateAndAuthor = styled.p`
    b {
        color: var(--secondary-color);
    }
`;

const Thumbnail = styled.img`
    margin: 0 auto;

    border-radius: 50%;
`;

const Title = styled.h1`
    padding-bottom: 0.5rem;
    margin: 0 5%;

    border-bottom: 2px solid var(--secondary-color);

    &.first {
        margin: 0;

        font-size: 150%;
    }

    @media screen and (max-width: 800px) {
        &.first {
            margin: 0 5%;

            font-size: 130%;
        }
    }
`;

export { BlurBar, Container, DateAndAuthor, Thumbnail, Title };
