import styled from 'styled-components';

export const Container = styled.div`
  align-items: center;
  display: flex;
  justify-content: center;
  margin-top: 35px;
  width: 100%;
`;

export const Content = styled.div`
  text-align: justify;
  width: 66%;
  padding: 10px 10px 50px 10px;
  a {
    color: #2979ff;
    text-decoration: none;
  }
  a:hover {
    color: #4672bd;
    text-decoration: underline;
  }

  h1,
  h2 {
    font-size: 28px;
    text-align: center;
    margin: 45px 0 35px 0;
  }
  h3 {
    font-size: 22px;
    margin: 25px 0 0 0;
  }
  p {
    font-size: 20px;
    margin: 0.7em 0;
  }

  table tr td {
    background: #f0ffff;
    text-align: justify;
  }

  figure img {
    @media (max-width: 1558px) {
      border-radius: 7px;
      display: block;
      margin-left: auto;
      margin-right: auto;
      margin-bottom: 50px;
      width: 70%;
      height: 70%;
    }
  }
  p {
    @media (max-width: 640px) {
      font-size: 1.5em;
      margin: 1.1em 0;
    }
  }
`;

export const Image = styled.img`
  border-radius: 7px;
  display: block;
  margin-left: auto;
  margin-right: auto;
  margin-bottom: 50px;
  width: 50%;
  @media (max-width: 640px) {
    width: 88%;
  }
`;
