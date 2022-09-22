import styled from 'styled-components'

export const Container = styled.div`
    max-width: 60rem;
    margin: 0 auto;
`

export const Title = styled.h1`
    font-size: 2.5rem;
    font-weight: 700;
    text-align: center;
`

export const Holder = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    margin-top: 2rem;

    span {
        max-width: 30rem;
        position: absolute;
        font-size: 1.5rem;
        font-weight: 700;
        text-align: center;
        top: 0.5rem;
        color: #000;
        text-shadow: 
            -1px -1px 0px #FFF, 
            -1px 1px 0px #08080800, 
            1px -1px 0px #FFF, 
            1px 0px 0px #FFF;
    }
`

export const Content = styled.div`
    display: flex;
    flex-direction: column;
    gap: 1rem;
    padding: 1rem 2rem 2rem 2rem;

    p {
        font-size: 1rem;
    }

    h2 {
        font-size: 3rem;
        font-weight: 500;
        line-height: 5rem;
    }

    table {
        margin-bottom: 1.5rem;
        border: 2px solid black;
        border-collapse: collapse;

        thead {
            border: 2px solid black;

            th {
                border-right: 2px solid black;
            }
        }

        tbody {
            td {
                border: 1px solid black;
                padding: 0.3rem;
            }
        }
    }

    ul, ol {
        padding-left: 1rem;
    }

    pre {
        background-color: darkgray;
        padding: 1rem 2rem;
        border-radius: 8px;
    }

    a {
        background-image: linear-gradient(94.25deg,#0f9ce7 0%,#44bce2 51.04%,#82e1db 100%);
        -webkit-background-clip: text;
        background-clip: text;
        font-weight: 500;
        color: transparent;
        -webkit-text-decoration-line: underline;
        text-decoration-line: underline;

        &: hover {
            color: #0f9ce7;
        }
    }
`