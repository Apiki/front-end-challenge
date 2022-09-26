import styled from "styled-components";

export const PostContentContainer = styled.section`
  display: flex;
  gap: 1rem;
  padding: 2.5rem 2rem;
  margin: 1rem !important;
  
  img {
    width: 100%;
  }
  h1,
  h2,
  h3, h4 {
    color: ${(props) => props.theme['gray-900']};
    padding: 2rem ;
  }
  p {
    color: ${(props) => props.theme['gray-900']};
    font-size: ${({ theme }) => theme.textSizes["title-title-m"]};
    font-weight: bold;
  }

  a {
    color: ${(props) => props.theme['gray-900']};
    font-size: ${({ theme }) => theme.textSizes["title-title-m"]};
    height: 2rem;
    border-radius: 8px;
    padding: 0.4rem;
    text-decoration: underline;
    transition: 0.2s;
    &:hover {
      background-color: ${(props) => props.theme['gray-700']};
      color: ${(props) => props.theme['pink-500']};
    }
  }

  ul, li {
    list-style: inherit;
    padding-left: 1rem;
    font-size: ${({ theme }) => theme.textSizes["title-title-m"]};
  }

  pre {
    background: ${(props) => props.theme['gray-100']};
    padding: 2rem;
    margin: 1rem;
    border-radius: 8px;
    > div {
      background: none !important;
      padding: 0 !important;
      margin: 0 !important;
      code {
        font-family: "FiraCode", monospace !important;
        line-height: 160% !important;
      }
    }
  }

  td, th {
    height: 2.2rem;
    padding-left: 0.8rem;
  }


`