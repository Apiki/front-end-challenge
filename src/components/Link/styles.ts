import { Link } from "react-router-dom";
import styled from "styled-components";

export const PostContainer = styled(Link)`
  width: 100%;
  border-radius: 10px;
  border: 2px solid ${(props) => props.theme['gray-500']};
  background: ${(props) => props.theme['gray-100']};
  padding: 2rem;
  transition: 0.4s;
  &:hover {
    border-color: ${(props) => props.theme['gray-900']};
    background: ${(props) => props.theme['gray-300']};
  }
  div {
    display: flex;
    gap: 1rem;
    margin-bottom: 1.25rem;
    strong {
      flex: 1;
      font-size: ${({ theme }) => theme.textSizes["title-title-m"]};
      color: ${(props) => props.theme['gray-900']};
      overflow: hidden;
      text-overflow: ellipsis;
      display: -webkit-box;
      -webkit-box-orient: vertical;
      -webkit-line-clamp: 2;
    }

  }

  img {
      width: 12.5rem;
      /* margin-bottom: 1rem; */
    }
`