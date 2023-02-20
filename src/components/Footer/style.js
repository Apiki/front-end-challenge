import styled from "styled-components";
import { colors } from "@/styles/colors";
import { device } from "@/styles/devices";

export const FooterContainer = styled.footer`
  padding: 1.6rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 1rem;

  .footer-text {
    font-size: 1.2rem;
    text-align: center;

    .link {
      color: ${colors.secondary[100]};
      text-decoration: none;
      &:hover {
        color: ${colors.secondary[200]};
      }
    }
  }

  ${device.tablet} {
    flex-direction: row;
    font-size: 1.4rem;

    .footer-text .link{
      font-weight: 600;
    }
  }

  ${device.laptop} {
    font-size: 1.6rem;
  }
`;