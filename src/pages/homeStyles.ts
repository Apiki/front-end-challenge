import styled from 'styled-components';

export const HomeContainer = styled.div`
  padding: 1rem 2rem;

  > div:last-child {
    display: grid;
    grid-template-columns: repeat(5, 1fr);
    gap: 2rem;
  }
`;
