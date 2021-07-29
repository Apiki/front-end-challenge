import styled from 'styled-components';

export const HomeContainer = styled.main`
  max-width: 900px;
  margin: 0 auto;
  padding: 80px 0;
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