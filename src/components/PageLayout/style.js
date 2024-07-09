import styled from "styled-components";
import { device } from "@/styles/devices";

export const Page = styled.div`
  width: 100%;

  position: absolute;
  top: 18rem;
  z-index: -1;
  
  ${device.tablet} {
    top: 20rem;
    gap: 4rem;

    padding: 2.4rem 9.6rem;
    max-width: 72rem;
  }

  ${device.laptop} {
    max-width: 72%;
    top: 2.4rem;
    left: 28rem;
    right: 4rem;
  }

  ${device.laptopL} {
    max-width: 90rem;
  }

  ${device.desktop} {
    left: 80rem;
  }
`;