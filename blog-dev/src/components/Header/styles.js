import styled from 'styled-components';

export const HeaderTag = styled.header`
  background: #00abc1;
  padding: 0 2%;
`;

export const HeaderContainer = styled.div`
  height: 38vh;
  max-width: 900px;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: flex-start;

  > a {
    text-decoration: none;
  }

  > a h1 {
    font-size: 4.6rem;
    color: #000;
    margin: 0;
  }
`;