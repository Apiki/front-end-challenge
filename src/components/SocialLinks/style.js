import styled from "styled-components";
import { colors } from "@/styles/colors";
import { device } from "@/styles/devices";

export const SocialLinksWrapper = styled.ul`
  display: flex;
  gap: 1.6rem;

  list-style: none;

  .social-link__icon {
    color: ${colors.primary[500]};
    font-size: 2.8rem;

    transition: color .4s ease;
    &:hover {
      color: ${colors.primary[100]};
    }
  }

  ${device.tablet} {
    .social-link__icon {
      font-size: 3.2rem;
    }
  }
`;