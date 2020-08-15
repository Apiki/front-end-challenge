import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

export const Post = styled.div`
  width: 80%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  background: #fff;
  border-radius: 8px;

  padding: 30px;
  margin: 20px 0;

  .description {
    p {
      margin-top: 10px;
      font-size: 18px;
      color: #494966;
    }
  }

  h1 {
    color: #212161;
    font-weight: bold;
  }

  > img {
    width: 70%;
    margin: 30px 0;
  }

  > a {
    align-self: flex-start;
    text-decoration: none;
    svg {
      color: #212161;
      background: #d1cfcf;
      border-radius: 50%;
      padding: 5px;
      margin-bottom: 20px;
    }
  }
`;

export const Info = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  margin-top: 20px;

  span {
    color: #777;
    font-size: 13px;
  }

  div.authorContent {
    display: flex;
    justify-content: space-between;

    div.author {
      display: flex;
      flex-direction: column;

      span {
        font-size: 10px;
      }
    }

    img {
      width: 20%;
      height: 20%;
      border-radius: 50%;
    }
  }
`;

export const Footer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  margin-top: 20px;

  span {
    color: #777;
    font-size: 13px;
  }

  div.authorContent {
    display: flex;
    justify-content: space-between;
    padding: 20px;
    width: 100%;

    background: #dddddd;
    border-radius: 8px;
    border: 1px solid #d1cfcf;

    div.author {
      display: flex;
      flex-direction: column;
      margin-left: 20px;

      strong {
        font-weight: bold;
        color: #bf1185;
        font-size: 18px;
        margin-bottom: 20px;
      }
      span {
        font-size: 16px;
      }
    }

    img {
      width: 15%;
      height: 15%;
      border-radius: 50%;
    }
  }
`;

export const Content = styled.div`
  figure {
    width: 100%;
    display: flex;
    align-items: center;
    flex-direction: column;
    margin: 10px 0;

    figcaption {
      margin: 10px 0;
      font-size: 12px;
    }

    img {
      margin: 10px auto;
      width: 50%;
    }
  }

  p {
    text-align: left;
    margin-top: 10px;
    font-size: 14px;
    color: #494966;
  }

  li {
    text-align: left;
    margin: 7px 0 0 15px;
    font-size: 14px;
    color: #494966;
  }

  h2 {
    color: #212161;
    margin: 20px;
    font-weight: bold;
  }

  h3 {
    color: #212161;
    margin: 20px 0;
  }

  pre {
    background: #eaeaea;
    padding: 15px;
    border: 1px solid #d3d3d3;
    border-radius: 8px;
    margin: 13px 0;
  }

  a {
    color: #343449;
    font-weight: bold;
    text-decoration: underline;
  }

  table {
    margin: 30px 0;
    tbody {
      tr {
        display: grid;
        grid-template-rows: 50px 1fr;
        grid-gap: 0 50px;
        grid-template-columns: 1fr 1fr 1fr;

        td {
          font-size: 14px;
        }
      }
    }
  }
`;
