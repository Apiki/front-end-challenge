import styled from 'styled-components';

export const HomeContainer = styled.div`
  padding: 1rem 0;

  display: flex;
  flex-direction: column;
  align-items: center;

  @media (max-width: 1440px) {
    padding: 1rem 0;
  }

  @media (max-width: 1000px) {
    padding: 1rem 0;
  }

  @media (max-width: 600px) {
    padding: 0;
    padding-bottom: 1rem;
  }

  > h1 {
    margin: 3rem 0 2rem;
    font-style: italic;
    color: ${(props) => props.theme['blue-500']};
  }

  > hr {
    width: 60%;
    border: 1px solid ${(props) => props.theme['blue-700']};
    margin: 2.5rem 0 1.5rem;
  }

  > div:last-of-type {
    display: grid;
    grid-template-columns: repeat(5, 1fr);
    gap: 2rem;

    @media (max-width: 1440px) {
      grid-template-columns: repeat(4, 1fr);
    }

    @media (max-width: 1000px) {
      grid-template-columns: repeat(3, 1fr);
    }

    @media (max-width: 600px) {
      grid-template-columns: repeat(2, 1fr);
    }
  }

  > button {
    margin-top: 2rem;
    background: ${(props) => props.theme['purple-500']};
    padding: 1rem;
    border-radius: 8px;

    font-weight: bold;
    text-transform: uppercase;
    color: ${(props) => props.theme['gray-100']};

    transition: background 0.2s;

    &:not(:disabled):hover {
      background: ${(props) => props.theme['purple-700']};
    }

    &:disabled {
      cursor: default;
      opacity: 0.5;
    }
  }
`;
