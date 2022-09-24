import styled from 'styled-components';

export const PostPageContainer = styled.div`
  padding: 3rem 3rem 2rem;
  margin: 0 15rem;

  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 3rem;
  background: ${(props) => props.theme['gray-700']};

  @media (max-width: 1440px) {
    margin: 0 10rem;
  }

  @media (max-width: 1000px) {
    margin: 0 5rem;
  }

  @media (max-width: 600px) {
    margin: 0;
  }

  > h1 {
    text-align: center;
    font-size: 3rem;
    color: ${(props) => props.theme['blue-500']};

    @media (max-width: 800px) {
      font-size: 2rem;
    }
  }

  > img {
    width: 100%;
    max-height: 600px;
    border-radius: 16px;
  }

  footer {
    width: 100%;
    display: flex;
    align-items: center;
    gap: 1rem;

    font-size: 1.5rem;
    color: ${(props) => props.theme['blue-500']};
    text-decoration: underline;
    cursor: pointer;

    @media (max-width: 600px) {
      font-size: 1rem;
    }
  }
`;

export const PostPageContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 1rem;
  padding: 0 0.5rem;

  font-size: 1.5rem;
  text-align: justify;
  color: ${(props) => props.theme.white};

  @media (max-width: 600px) {
    font-size: 1rem;
  }

  h2,
  p {
    width: 100%;
  }

  h2 {
    margin-top: 1rem;
  }

  img {
    width: 100%;
    height: auto;
    max-height: 600px;
    border-radius: 8px;
  }

  a {
    color: ${(props) => props.theme['blue-700']};
    text-decoration: none;

    &:hover {
      text-decoration: underline;
    }
  }

  table {
    text-align: start;
    background: ${(props) => props.theme['gray-600']};
    border-collapse: collapse;
    margin-bottom: 1rem;

    th {
      text-align: center;
    }

    th,
    td {
      padding: 0.5rem;
    }
  }
`;
