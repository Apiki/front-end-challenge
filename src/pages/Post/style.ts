import styled from "styled-components";

const Author = styled.div`
    display: flex;
    flex-flow: column;

    img {
        border-radius: 50%;
    }
`;

const AuthorContainer = styled.div`
    display: flex;
    justify-content: center;
`;

const Comment = styled.div`
    display: flex;
    align-items: center;
    gap: 1rem;

    img {
        padding: 0.25rem;

        background-color: var(--secondary-color);
        border-radius: 50%;

        aspect-ratio: 1/1;
    }
`;

const CommentContainer = styled.div`
    margin: 2rem 0;

    display: flex;
    flex-flow: column;
    gap: 1rem;
`;

const CommentText = styled.div`
    padding: 0 1rem;

    background-color: var(--secondary-color);
    border-radius: 0.5rem;

    color: white;
`;

const Container = styled.div`
    min-height: 100vh;
    min-width: 60vw;
    margin: 2rem 20%;

    @media screen and (max-width: 800px) {
        margin: 2rem 5%;
    }
`;

const Content = styled.div`
    figure {
        width: fit-content;
        margin: 2rem auto;

        display: flex;
        flex-flow: column;

        border: 2px solid var(--primary-color);
        border-radius: 0.25rem;

        figcaption {
            padding: 0.5rem;
        }

        @media screen and (max-width: 800px) {
            img {
                height: auto;
                width: 100%;
            }
        }
    }

    table {
        margin: 1rem;

        th {
            padding: 0.25rem;

            background-color: var(--primary-color);
            border-radius: 0.25rem;

            color: white;
        }

        td {
            padding: 0.25rem;
        }

        tr:nth-child(even) {
            background-color: #e1e1e1;
        }
    }

    ul {
        list-style: none;

        li::before {
            width: 1em;
            margin-left: -1em;

            display: inline-block;

            color: var(--primary-color);
            font-weight: bold;

            content: "\\2022";
        }
    }
`;

const Description = styled.div`
    margin-left: 10%;
    margin-right: 10%;
    margin-bottom: 2rem;
    padding-bottom: 1rem;

    border-bottom: 2px solid white;

    text-align: center;
`;

const Header = styled.div`
    width: fit-content;
    margin-top: 0;
    margin-left: auto;
    margin-right: auto;
    margin-bottom: 3rem;
    padding-top: 0.2rem;
    padding-left: 0.25rem;
    padding-right: 0.25rem;
    padding-bottom: 1.25rem;

    background-color: var(--secondary-color);
    border-radius: 0.5rem;

    color: white;
`;

const NoComment = styled.div`
    width: 50%;
    margin: 0 auto;
    padding: 0.5rem 0;

    background-color: var(--primary-color);
    border-radius: 0.5rem;

    color: white;
    text-align: center;

    @media screen and (max-width: 800px) {
        width: 100%;
    }
`;

const Title = styled.h1`
    margin: 1rem 10%;

    border: none;

    font-size: 250%;
    text-align: center;
`;

export {
    Author,
    AuthorContainer,
    Comment,
    CommentContainer,
    CommentText,
    Container,
    Content,
    Description,
    Header,
    NoComment,
    Title,
};
