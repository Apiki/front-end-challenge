import styled from "styled-components";
import { colors } from "@/styles/colors";
import { device } from "@/styles/devices";

export const ShareButtonContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  justify-content: center;

  position: relative;
  right: 0;

  .share__paragraph {
    color: ${colors.primary[500]};
    font-size: 1.4rem;
  }

  .share__links {
    display: flex;
    align-items: center;
    gap: 2rem;
    a {
      color: ${colors.secondary[200]};
      font-size: 2rem;
      
      &:hover {
        color: ${colors.secondary[100]};
      }
    }
  }

  ${device.tablet} {
    .share__paragraph {
      font-size: 1.6rem;
    }
    .share__links a {
      font-size: 2.8rem;
    }
  }
`;