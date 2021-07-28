import styled from 'styled-components';


export const CardContainer = styled.div`
  max-width: 600px;
  margin: 0 auto;
  padding: 2rem;
  overflow: hidden;
  border-radius: 16px;
  background: #ddd;

  display: flex;
  align-items: center;
  flex-direction: flex-start;
`;

export const ImgDiv = styled.div`
  position: relative;
  overflow: hidden;
  width: 18.0rem;
  border-radius: 8px;

  > img {
    width: 100%;
    heigth: auto;
  }
`;

export const CardContent = styled.div`
  margin-left: 2rem;

  > h3, p {
    margin: 0;
    padding: 0;
  }

  > h3 {
    color: #000;
    font-size: 3.6rem;
  }

  p {
    margin-top: 1rem;
    font-size: 1.8rem;
  }
`;