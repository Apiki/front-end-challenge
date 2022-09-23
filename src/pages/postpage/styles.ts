import styled from 'styled-components';

export const PostPageContainer = styled.div`
  padding: 3rem 3rem 2rem;
  margin: 0 15rem;

  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 3rem;
  background: ${(props) => props.theme['gray-700']};

  > h1 {
    font-size: 3rem;
    color: ${(props) => props.theme['blue-500']};
  }

  > img {
    width: 100%;
    height: 600px;
    border-radius: 16px;
  }

  > a {
    width: 100%;
    display: flex;
    align-items: center;
    gap: 1rem;

    font-size: 1.5rem;
    color: ${(props) => props.theme['blue-500']};
    text-decoration: underline;
    cursor: pointer;
  }
`;

export const PostPageContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 2rem;
  padding: 0 0.5rem;

  font-size: 2rem;
  text-align: justify;
  color: ${(props) => props.theme.white};

  h2,
  p {
    width: 100%;
  }

  h2 {
    margin-top: 1rem;
  }

  img {
    border-radius: 8px;
  }

  a {
    color: ${(props) => props.theme['blue-700']};
    text-decoration: none;

    &:hover {
      text-decoration: underline;
    }
  }
`;
