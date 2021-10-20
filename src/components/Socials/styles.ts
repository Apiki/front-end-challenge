import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  align-items: center;

  > * {
    margin: 0 20px;
  }

  svg {
    &:hover {
      color: #ff9000;
      cursor: pointer;
    }
  }
`;
