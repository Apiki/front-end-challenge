import styled from "styled-components";
import { colors } from "@/styles/colors";

export const Button = styled.span`
  width: fit-content;
  padding: .8rem;

  display: none;
  align-items: center;
  justify-content: center;

  background-color: ${colors.secondary[200]};
  border-radius: 50%;
  
  position: fixed;
  bottom: 2rem;
  right: 2rem;

  .icon {
    color: ${colors.primary[100]};
    font-size: 2.4rem;
  }

  &:hover {
    cursor: pointer;
    background-color: ${colors.secondary[100]};
  }
  &.active {
    display: flex;
  }
`;