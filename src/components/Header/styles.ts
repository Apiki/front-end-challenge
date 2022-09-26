import styled from "styled-components";
import headerBg from "../../assets/backgroundImg.jpg";

export const HeaderContainer = styled.header`
  width: 100%;
  height: 10rem;
  background: url(${headerBg}) no-repeat center;
  background-size: cover;
  display: flex;
  align-items: center;
  justify-content: center;

  img {
    background: none;
  }
`;