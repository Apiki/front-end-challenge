import styled from "styled-components";
import palet from "../../services/palet";

export const FooterStyled = styled.footer`
  display: flex;
  background-color: #eee;
  width: 100%;
  flex-direction: column;
  position: relative;
  bottom: 0;
  left: 0;
  align-items: center;
  justify-content: flex-start;
  padding: 24px;
  span {
    color: ${palet.secondary};
    font-weight: 700;
    margin-bottom: 18px;
  }
  p {
    color: ${palet.primary};
    line-height: 1.6;
    text-align: center;
  }
`;