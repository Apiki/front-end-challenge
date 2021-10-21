import styled from 'styled-components';

export const Container = styled.main`
  padding: 2vw 5vw;
  display: flex;
  justify-content: center;

  .back-btn {
    position: relative;
    top: -10px;
    right: 40px;

    &:hover {
      color: #ba007c;
      cursor: pointer;
    }
  }

  @media (max-width: 480px) {
    .back-btn {
      position: absolute;
      top: 75px;
      right: 0;
      left: 10px;
      width: 26px;
    }
  }
`;

export const Content = styled.section`
  max-width: 740px;

  h2 {
    font-size: 30px;
  }

  .post-description {
    font-size: 24px;
    opacity: 0.8;
  }

  @media (max-width: 480px) {
    margin-top: 20px;
  }
`;

export const PostImage = styled.div`
  img {
    border-radius: 10px;
  }
`;

export const PostContent = styled.div`
  p {
    font-size: 18px;
  }

  table {
    margin-left: -40px;
    th {
      color: #fff;
      text-align: left;
      font-size: 20px;
      font-weight: 600;
    }

    td {
      background-color: #222;
      text-align: left;
      font-size: 18px;
      font-weight: 600;
    }
  }

  img {
    margin-left: -40px;
    width: 100%;
    max-width: 800px;
    height: 20%;
  }
`;

export const PostAbout = styled.div`
  margin-bottom: 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 250px;
`;
