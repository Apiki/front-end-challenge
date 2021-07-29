import styled from 'styled-components';


export const CardContainer = styled.div`
  max-width: 900px;
  margin: 0 auto;
  margin-bottom: 4rem;
  padding: 4rem 2rem;
  overflow: hidden;
  border-radius: 16px;
  background: #ddd;

  display: flex;
  align-items: center;
  flex-direction: flex-start;
`;

export const ImgDiv = styled.div`
  position: relative;
  height: 140px;

  > img {
    width: auto;
    height: 100%;
  }
`;

export const CardContent = styled.div`
  margin-left: 2rem;

  > h3, p {
    margin: 0;
    padding: 0;
  }

  > a {
    text-decoration: none;
  }

  > a h3 {
    color: #000;
    font-size: 3.0rem;
  }

  p {
    margin-top: 1rem;
    font-size: 1.6rem;
  }
`;