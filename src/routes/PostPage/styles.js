import styled from 'styled-components';

export const Image = styled.img`
    width: 50vw;
    height: 45vh;
    border-radius: 1rem;
`;

export const ContainerImg = styled.div`
    display: flex;
    justify-content: center;
    text-align: center;
`;

export const Title = styled.h1`
    padding: 1rem;
    display: flex;
    justify-content: center;
    text-align: center;
`;

export const MainContainer = styled.div`
    padding: 1rem;
    color: #4e5154;
`;

export const ContentContainer = styled.div`
    width: 60rem;
    margin: 0 auto;
    font-size: 1rem;
    line-height: 2rem;
    padding: 2rem;

    figure[class*="wp-block-image"] {
        display: flex;
        justify-content: center;
    }

    figure[class*="wp-block-image"] img {
        height: 40vh;
        object-fit: fill;
        width: 50%;
    }

    img {
        border-radius: 6px;
        height: 70vh;
        margin-bottom: 1%;
        margin-top: 2%;
    }

    pre {
        color: red;
        font-size: small;
        margin-bottom: 1%;
        margin-top: 1%;
        white-space: pre-wrap;
    }

    figure[class*="wp-caption"] {
        align-self: center;
        display: flex;
        flex-flow: column;
        justify-content: center;
        margin-top: 2%;
    }

    figure[class*="wp-caption"] a{
        display: flex;
        justify-content: center;
    }

    figure[class*="wp-caption"] a img {
        border: 1px solid lightgray;
        height: 30vh;
        object-fit: fill;
        width: 100%;
    }

    figure[class*="aligncenter"] img {
        height: 60vh;
        object-fit: fill;
        width: 30%;
    }

    figure[class*="aligncenter"] {
        display: flex;
        justify-content: center;
    }

    p[class*="aligncenter"] img {
        height: 60vh;
        object-fit: fill;
        width: 30%;
    }

    p[class*="aligncenter"] {
        display: flex;
        justify-content: center;
    }

    p {
        display: inline;
    }

    h1 {
        color: #52a0e1;
        font-size: xx-large;
    }

    h2 {
        margin-bottom: 0.5%;
        margin-top: 2%;
    }

    a {
        color: #ea6e01;
    }

    a:hover {
        color: #52a0e1;
      }
      
    ul {
        display: unset;
        list-style: circle;
        padding: 15px;
        width: unset;
    }
      
    ul li {
        color: #52a0e1;
        font-size: unset;
        font-weight: 500;
        margin-right: 4%;
    }
      
    ol li {
        color: #52a0e1;
        font-size: unset;
        font-weight: 500;
        margin-right: 4%;
    }
      
    ul li:last-child,
         li:last-child {
        margin-bottom: 0.5%;
      }
      
    ol {
        padding: 15px;
      }
      
    li:first-child {
        margin-top: 0.5%;
      }
      
    h3 {
        margin-top: 2%;
      }
      
    -text {
        display: flex;
        flex-flow: column;
        padding: 2%;
        width: 95%;
      }
      
    .wp-block-table {
        /* background-color: lightgray; */
        margin-bottom: 1%;
        margin-top: 1%;
      }
      
    thead {
        background-color: darkcyan;
      }
      
    tbody {
        background-color: lightslategray;
      }
      
    tr {
        border: 1px solid #ea6e01;
      }
      
    thead th {
        color: aliceblue;
      }
      
      @media (max-width: 900px) {
         ul {
          display: unset;
          list-style: circle;
          padding: 15px;
          width: unset;
        }
        ul li {
          color: #52a0e1;
          font-size: unset;
          font-weight: 500;
          margin-right: 3%;
        }
      
        ol li {
          color: #52a0e1;
          font-size: unset;
          font-weight: 500;
          margin-right: 3%;
        }
        figure[class*="wp-caption"] a img {
          height: 30vh;
          object-fit: fill;
          width: 90vw;
        }
      }
      
      @media (max-width: 650px) {
         h1 {
          color: #52a0e1;
          font-size: x-large;
        }
      
         h2 {
          font-size: large;
        }
      
        figure[class*="wp-block-image"] img {
          height: 40vh;
          object-fit: fill;
          width: 70%;
        }
      
        figure[class*="aligncenter"] img {
          height: 60vh;
          object-fit: fill;
          width: 30%;
        }
      
        img {
          height: unset;
        }
      }
      
      @media (max-width: 425px) {
        img {
          height: unset;
        }
    }
`;
