import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  align-items: center;

  > * {
    margin: 0 1rem;
  }

  svg {
    &:hover {
      color: #ba007c;
      cursor: pointer;
    }
  }

  @media (max-width: 480px) {
    > * {
      margin: 0 0.5rem;
    }

    svg {
      width: 22px;
      height: 22px;
      margin-top: 8px;
    }
  }
`;
