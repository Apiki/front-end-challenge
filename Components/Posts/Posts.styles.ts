import styled, { css } from "styled-components";

export const Posts = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 32px;
`

export const PostsList = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 32px;
`

export const Button = styled.button<any>`
  ${({ showLoadMore }) => css`
    display: ${showLoadMore ? "block" : "none"};
    background: #fff;
    outline: none;
    border: none;
    padding: 16px 64px;
    font-size: 18px;
    cursor: pointer;
    transition: background-color 0.2s ease-in-out;

    &:hover {
      background: #e4e4e4;
    }

    &:disabled {
      cursor: not-allowed;
      background: #4682b4;
    }
  `};
`
