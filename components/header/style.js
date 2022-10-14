import styled from "styled-components";
import palet from "../../services/palet";

export const HeaderContainer = styled.header`
  background-color: ${palet.primary};
  background: linear-gradient(90deg, #67666a 0%, #000000 100%);
  width: 100%;
  height: 60px;
  display: flex;
  margin-bottom: 16px;
  align-items: center;
  justify-content: space-between;
  padding: 16px;

  a {
    text-decoration: none;
    color: #eee;
    font-weight: 500;
    transition: 0.4s;
    :hover {
      color: ${palet.highligth};
    }
  }
`;