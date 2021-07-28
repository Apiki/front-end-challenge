import styled from 'styled-components';

export const HeaderTag = styled.header`
  background: #00abc1;
  padding: 0 2%;
`;

export const HeaderContainer = styled.div`
  height: 38vh;
  max-width: 600px;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: flex-start;

  > h1 {
    font-size: 4.2rem;
    color: #000;
    margin: 0;
  }
`;