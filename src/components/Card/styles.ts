import styled from 'styled-components';

export const Container = styled.main`
  padding: 1.5vw 5vw;
`;

export const CardContent = styled.div`
  display: flex;
  align-items: center;

  &:hover {
    cursor: pointer;
    h3 {
      color: #ba007c;
    }
  }
`;

export const CardImage = styled.aside`
  margin-right: 2vw;
  img {
    border-radius: 10px;
  }
`;

export const CardInfo = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: -45px;

  h3 {
    font-size: 30px;
  }

  .post-author {
    color: #ccc;
    margin-bottom: 1vw;
    margin-top: -20px;
    opacity: 0.8;
  }

  .post-description {
    font-size: 18px;
    max-width: 32vw;
    overflow: hidden;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
  }

  .post-created-at {
    margin-top: 20px;
    color: #ccc;
    opacity: 0.8;
  }
`;
