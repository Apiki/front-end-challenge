import { colors } from "@/styles/colors";
import styled from "styled-components";

export const PostsListWrapper = styled.ul`
  margin-bottom: 4.8rem;

  list-style: none;
  padding: 1.6rem;

  display: flex;
  flex-direction: column;
  gap: 4.8rem;
`;

export const ShowMoreButton = styled.button`
  margin-bottom: 4rem;
  padding: 1rem;
  
  border: none;
  background-color: transparent;
  color: ${colors.secondary[100]};
  font-size: 1.6rem;
  font-weight: 700;

  position: relative;
  left: 50%;
  transform: translateX(-50%);

  &:hover {
    cursor: pointer;
    color: ${colors.secondary[200]};
  }
`;