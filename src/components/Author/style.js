import styled from "styled-components";
import { colors } from "@/styles/colors";
import { device } from "@/styles/devices";

export const AuthorContainer = styled.a`
  display: flex;
  align-items: center;
  gap: .8rem;

  text-decoration: none;
  .author__image {
    width: 4rem;
    height: 4rem;
    background-color: ${props => props.image};
    border-radius: 50%;
  }

  .author__name {
    color: ${colors.secondary[100]};
    font-size: 1.2rem;
    font-weight: 500;
    
    &:hover {
      color: ${colors.secondary[200]};
    }
  }

  ${device.tablet} {
    .name {
      font-size: 1.4rem;
    }
  }
`;