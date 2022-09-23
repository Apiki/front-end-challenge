import styled from 'styled-components';

export const HomeContainer = styled.div`
  padding: 1rem 15rem;

  display: flex;
  flex-direction: column;
  align-items: center;

  > h1 {
    margin: 3rem 0 2rem;
    font-style: italic;
    color: ${(props) => props.theme['blue-500']};
  }

  > hr {
    width: 80%;
    border: 1px solid ${(props) => props.theme['blue-700']};

    &:nth-of-type(1) {
      margin-top: 2.5rem;
    }

    &:nth-of-type(2) {
      width: 60%;
      margin: 1.5rem;
    }

    &:nth-of-type(3) {
      margin-bottom: 2.5rem;
    }
  }

  > div:last-of-type {
    display: grid;
    grid-template-columns: repeat(5, 1fr);
    gap: 2rem;
  }

  > button {
    margin-top: 2rem;
    background: ${(props) => props.theme['purple-500']};
    padding: 1rem;
    border-radius: 8px;
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
