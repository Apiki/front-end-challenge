import styled, { css } from "styled-components";
import media from "styled-media-query";

type CardFeaturedProps = {
  isCardFeatured: boolean;
};

export const Wrapper = styled.div<CardFeaturedProps>`
  ${({ theme, isCardFeatured }) => css`
    cursor: pointer;
    position: relative;
    height: 100%;
    min-height: auto;
    display: flex;
    flex-direction: ${isCardFeatured ? "row" : "column"};
    background-color: ${isCardFeatured ? theme.colors.grey : ""};
    align-items: center;
    text-decoration: none;
    border: 1px solid ${theme.colors.grey};
    border-radius: 10px;

    ${media.lessThan("medium")`
      display: inline-block;
      -webkit-box-shadow: 0px 3px 11px 1px rgba(0,0,0,0.16);
      -moz-box-shadow: 0px 3px 11px 1px rgba(0,0,0,0.16);
      box-shadow: 0px 3px 11px 1px rgba(0,0,0,0.16);
    `}
  `}
`;

export const ImageBox = styled.div<CardFeaturedProps>`
  ${({ isCardFeatured }) => css`
    height: ${isCardFeatured ? "40rem" : "25rem"};
    ${media.lessThan("medium")`
      max-height: 25rem;
    `}
    width: 100%;
    border-radius: 10px;
    position: relative;
    background: #f6f7f8;
    background-image: linear-gradient(
      to right,
      #f6f7f8 0%,
      #edeef1 20%,
      #f6f7f8 40%,
      #f6f7f8 100%
    );
    background-size: 80rem 14rem;
    animation: placeholderShimmer 1s linear infinite forwards;

    span {
      border-radius: 0 !important;
      max-height: ${isCardFeatured ? "40rem" : "25rem"};

      ${media.lessThan("medium")`
        max-height: 25rem;
      `}
    }

    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      border-radius: 10px;

      ${media.lessThan("medium")`
        max-height: 25rem;
      `}
    }
    @keyframes placeholderShimmer {
      0% {
        background-position: -40rem 0;
      }
      100% {
        background-position: 40rem 0;
      }
    }
  `}
`;

export const Category = styled.div`
  ${({ theme }) => css`
    padding: ${theme.spacings.xxsmall};
    position: absolute;
    bottom: ${theme.spacings.xxsmall};
    right: ${theme.spacings.xxsmall};
    background-color: ${theme.colors.secondary};
    display: inline-block;
    border-radius: ${theme.border.radius};
    font-size: ${theme.font.sizes.xsmall};
    font-weight: ${theme.font.semibold};
    color: ${theme.colors.white};
  `}
`;

export const Date = styled.div`
  ${({ theme }) => css`
    padding: ${theme.spacings.xxsmall} 0;
    bottom: ${theme.spacings.xxsmall};
    right: ${theme.spacings.xxsmall};
    border-radius: ${theme.border.radius};
    font-size: ${theme.font.sizes.xsmall};
    font-weight: ${theme.font.semibold};
    color: ${theme.colors.paragraph};
  `}
`;

export const Info = styled.div<CardFeaturedProps>`
  ${({ isCardFeatured }) => css`
    padding: ${isCardFeatured ? "4rem" : "1rem 2rem"};
    position: relative;
    height: 55%;

    ${media.lessThan("medium")`
      height: 100%;
    `}
  `}
`;

export const Title = styled.h2<CardFeaturedProps>`
  ${({ theme, isCardFeatured }) => css`
    margin-bottom: ${theme.spacings.xsmall};
    a {
      font-size: ${isCardFeatured
        ? theme.font.sizes.xlarge
        : theme.font.sizes.xmedium};
      line-height: ${theme.font.sizes.xmedium};
      font-weight: ${theme.font.semibold};
      color: ${theme.colors.black};
    }
  `}
`;

export const Excerpt = styled.div`
  ${({ theme }) => css`
    margin-bottom: ${theme.spacings.xsmall};
    font-size: ${theme.font.sizes.medium};
    line-height: ${theme.font.sizes.xlarge};
    font-weight: ${theme.font.medium};
    color: ${theme.colors.paragraph};
  `}
`;

export const ReadMore = styled.div`
  ${({ theme }) => css`
    position: absolute;
    bottom: 10px;
    a {
      margin-bottom: ${theme.spacings.xsmall};
      font-size: ${theme.font.sizes.medium};
      line-height: ${theme.font.sizes.xlarge};
      font-weight: ${theme.font.medium};
      color: ${theme.colors.secondary};
    }

    ${media.lessThan("medium")`
      position: relative;
    `}
  `}
`;
