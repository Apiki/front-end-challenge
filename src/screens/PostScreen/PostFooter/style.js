import styled from "styled-components";
import { colors } from "@/styles/colors";
import { device } from "@/styles/devices";

export const Footer = styled.footer`
  padding: 1.6rem;

  display: flex;
  flex-direction: column;
  gap: 2rem;

  .about {
    padding: 1rem;
    display: flex;
    flex-direction: column;
    gap: 1.2rem;

    border: 1px solid ${colors.primary[400]};

    &__text {
      color: ${colors.primary[600]};

      font-size: 1.4rem;
      font-weight: 300;
    }

    ${device.laptopL} {
      flex-direction: row;
      gap: 1.4rem;

      &__text {
        width: 80%;
        font-size: 1.6rem;
      }
    }
  }

  .home-btn {
    color: ${colors.secondary[100]};
    font-size: 1.4rem;
    text-decoration: none;

    display: flex;
    align-items: center;
    justify-content: center;
    gap: 1rem;
    
    &:hover {
      color: ${colors.secondary[200]};
    }

    ${device.laptop} {
      font-size: 1.6rem;
    }
  }
`;