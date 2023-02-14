import styled from "styled-components";
import { colors } from "@/styles/colors";
import { device } from "@/styles/devices";

export const PostsListWrapper = styled.ul`
  list-style: none;
  
  width: 100%;
  padding: 1.6rem;

  display: flex;
  flex-direction: column;
  gap: 4.8rem;
  
  position: absolute;
  top: 18rem;
  z-index: -1;

  ${device.tablet} {
    padding: 2.4rem 9.6rem;
    top: 20rem;
    gap: 6.4rem;
  }
  
  ${device.laptop} {
    top: 2.4rem;
    left: 28rem;
    max-width: 80rem;
    gap: 8rem;
  }

  ${device.laptopL} {
    max-width: 100rem;
  }

  ${device.desktop} {
    left: 80rem;
  }
`;