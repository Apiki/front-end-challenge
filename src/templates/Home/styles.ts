import styled, { css } from "styled-components";
import media from "styled-media-query";

export const Wrapper = styled.div`
  display: grid;
  grid-auto-columns: 1fr;
  grid-gap: 20px;
  margin: 2rem 0 10rem 0;

  & :first-child {
    grid-column: span 3;
  }

  ${media.lessThan("medium")`
    grid-template-columns: repeat(1, 1fr);

    & :first-child {
      grid-column: span 1;
    }
  `}
`;

export const Title = styled.h1`
  ${({ theme }) => css`
    margin: ${theme.spacings.xxlarge} 0 ${theme.spacings.large} 0;
    font-size: ${theme.font.sizes.xmedium};
    line-height: ${theme.font.sizes.xmedium};
    font-weight: ${theme.font.bold};
    color: ${theme.colors.black};
    text-transform: uppercase;
  `}
`;

export const ShowMore = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 10rem;
`;

export const ShowMoreButton = styled.button`
  ${({ theme }) => css`
    text-align: center;
    text-transform: uppercase;
    font-weight: bold;
    cursor: pointer;
    color: ${theme.colors.secondary};
    background-color: transparent;
    border: none;
    border-radius: 10px;
    border: 1px solid ${theme.colors.secondary};
    padding: ${theme.spacings.xsmall};
    transition: color ${theme.transition.default};
    &:hover {
      background-color: ${theme.colors.secondary};
      color: ${theme.colors.white};
    }
  `}
`;
export const ShowMoreLoading = styled.img`
  width: 4rem;
`;
