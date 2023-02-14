import styled from "styled-components";
import { colors } from "@/styles/colors";
import { device } from "@/styles/devices";

export const HeaderContainer = styled.header`
  background-color: ${colors.primary[800]};

  width: 100%;
  padding: 3.2rem 0;

  position: fixed;

  .header-content {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 2rem;

    &__logo {
      width: 18rem;
    }
  }

  ${device.tablet} {
    padding: 3.2rem 0;
    .header-content {
      &__logo {
        width: 24rem;
      }
    }
  }

  ${device.laptop} {
    width: 32rem;
    height: 100vh;
    
    .header-content {
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
    }

  }

  ${device.desktop} {
    width: 80rem;
  }
`;