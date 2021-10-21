import styled from 'styled-components';

export const Container = styled.main``;

export const Content = styled.section`
  margin-top: 3.5vw;
`;

export const LoadMoreBtn = styled.div`
  margin-top: 25px;

  span {
    display: flex;
    background-color: #ba007c;
    padding: 20px;
    width: 100%;
    font-size: 20px;
    font-weight: 600;
    justify-content: center;
    color: #ffffff;
    opacity: 0.6;
    transition: opacity 0.3s ease-in;

    &:hover {
      cursor: pointer;
      opacity: 0.8;
    }
  }
`;
