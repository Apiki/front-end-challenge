import styled from "styled-components";

export const PostsListContainer = styled.section`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(26rem, 1fr));
  gap: 2rem;
  margin-bottom: 15rem;

  button {
    font-weight: bold;
    height: 2rem;
    background-color: ${(props) => props.theme['gray-300']};
    border-radius: 5px;
    transition: 0.2s;
    &:hover {
      background-color: ${(props) => props.theme['gray-700']};
      color: ${(props) => props.theme['pink-500']};
    }
  }
`