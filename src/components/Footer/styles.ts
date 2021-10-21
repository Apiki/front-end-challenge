import styled from 'styled-components';

export const Container = styled.footer`
  width: 100%;
  height: 100%;
  padding: 2vw 5vw;
  background-color: var(--bgHeaderColor);

  .footer-divider {
    width: 100%;
    margin-top: 20px;
    border-top: 1px solid white;
    display: flex;
  }
`;

export const Content = styled.div`
  display: flex;
  justify-content: space-between;
`;
