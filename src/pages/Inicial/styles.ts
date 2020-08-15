import styled, { keyframes } from 'styled-components';

const rotate = keyframes`
  from {
    transform: rotate(0deg);
  } to {
    transform: rotate(360deg);
  }
`;

export const Loading = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 50%;
  text-align: center;
  svg {
    margin: 100px;
    height: 90px;
    width: 90px;
    color: #ddd;
    animation: ${rotate} 1s linear infinite;
  }
`;

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  div.welcome {
    margin-top: 30px;
    width: 70%;

    h1 {
      font-weight: bold;
      margin-bottom: 5px;
    }

    span {
      font-size: 16px;
    }
  }
`;

export const Content = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  width: 70%;
`;

export const Post = styled.a`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  background: #fff;
  padding: 20px;
  border-radius: 8px;
  margin-bottom: 32px;
  text-decoration: none;

  strong {
    text-decoration: none;
    font-size: 20px;
    font-weight: bold;
    color: #444442;
    margin-bottom: 15px;
  }

  > div {
    display: flex;
    padding: 0 20px;
    height: 100%;

    > img {
      width: 30%;
      height: 30%;
      border-radius: 8px;
      margin: auto 30px auto 0;
    }
  }

  &:hover {
    opacity: 0.9;
  }
`;

export const Info = styled.div`
  .description {
    color: #555;
    margin-bottom: 13%;
  }
`;

export const InfoFooter = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: auto;

  span {
    margin-top: auto;
    color: #777;
    font-size: 13px;
  }

  > div {
    display: flex;
    justify-content: space-between;
    align-items: baseline;
    width: 20%;

    div.author {
      display: flex;
      flex-direction: column;
      align-items: flex-start;

      span {
        font-size: 10px;
      }
    }

    img {
      margin-top: auto;
      margin-left: 10px;
      width: 20%;
      height: 20%;
      border-radius: 50%;
    }
  }
`;

export const Pages = styled.div`
  margin-left: auto;
  margin-bottom: 20px;
  display: flex;
  align-items: center;

  strong {
    margin: 0 5px 0 10px;
  }

  div {
    display: flex;
    justify-content: space-between;

    button {
      border: none;
      border-radius: 8px;
      padding: 5px;

      margin-left: 5px;

      &:hover {
        opacity: 0.6;
      }
    }
  }
`;
