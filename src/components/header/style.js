import styled from "styled-components";
import palet from "../../services/palet";

export const HeaderContainer = styled.header`
  background-color: ${palet.primary};
  background: linear-gradient(90deg, #67666a 0%, #000000 100%);
  width: 100%;
  height: 60px;
  display: flex;
  margin-bottom: 46px;
  align-items: center;
  justify-content: space-between;
  padding: 16px;
`;