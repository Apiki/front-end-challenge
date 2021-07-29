import styled from 'styled-components';

export const PostContainer = styled.main`
  max-width: 900px;
  margin: 0 auto;
  padding: 80px 2%;

  > img {
    width: 100%;
    height: auto;
  }

  > h1 {
    font-size: 3.6rem;
    margin-top: 60px;
    text-transform: uppercase;
    font-weight: bold;
  }

  > div {
    margin-top: 2rem;

    > p {
      font-size: 1.8rem;
      margin-bottom: 1rem;
    }

    > h2 {
      font-size: 2.8rem;
      font-weight: bold;
      margin-top: 2rem;
      margin-bottom: 1.5rem;
    }

    > figure img {
      width: 100%;
      height: auto;
      margin: 4rem 0;
    }

    > div figure table thead th {
      font-size: 1.8rem;
      margin: 2.2rem 0;
    }

    > div figure table tbody td {
      font-size: 1.4rem;
      margin: 1.5rem 0;
      text-align: center;
    }

    > div div p {
      font-size: 1.6rem;
      margin: 2rem 0;
    }
  }
`;

export const LoadingDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 40px;

  > p {
    font-size: 3.9rem;
    color: #000;
    margin: 0;
  }
`;