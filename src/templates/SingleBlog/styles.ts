import styled, { css } from "styled-components";
import media from "styled-media-query";

export const ImageBox = styled.div`
  ${({ theme }) => css`
    height: 50rem;
    max-width: 70%;
    width: 100%;
    position: relative;
    background: #f6f7f8;
    background-image: linear-gradient(
      to right,
      #f6f7f8 0%,
      #edeef1 20%,
      #f6f7f8 40%,
      #f6f7f8 100%
    );
    background-size: center;
    animation: placeholderShimmer 1s linear infinite forwards;
    margin-bottom: 20px;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: ${theme.spacings.medium};

    &:before {
      content: "";
      background-color: rgba(0, 0, 0, 0.5);
      width: 100%;
      height: 100%;
      position: absolute;
      top: 0;
      left: 0;
    }

    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
    @keyframes placeholderShimmer {
      0% {
        background-position: -40rem 0;
      }
      100% {
        background-position: 40rem 0;
      }
    }

    ${media.lessThan("medium")`
      max-width: 100%;
      height: 20rem;
    `}
  `}
`;

export const Title = styled.div`
  ${({ theme }) => css`
    position: relative;
    max-width: 70%;
    width: 100%;
    text-align: left;
    h1 {
      color: ${theme.colors.black};
      font-size: 5rem;
      line-height: 6rem;
      font-weight: ${theme.font.bold};
      display: inline-block;
      margin-bottom: ${theme.spacings.small};
      strong {
        font-size: ${theme.font.sizes.xxlarge};
        font-weight: ${theme.font.bold};
      }
      ${media.lessThan("medium")`
        font-size: ${theme.font.sizes.xxlarge};
        line-height: calc(${theme.font.sizes.xxlarge} + 0.5rem);
        max-width: 100%;
      `}
    }
  `}
`;

export const Category = styled.div`
  ${({ theme }) => css`
    span {
      padding: ${theme.spacings.small} 0;
      margin-right: 5px;
      border-radius: ${theme.border.radius};
      color: ${theme.colors.secondary};
      font-family: ${theme.font.family};
      font-size: ${theme.font.sizes.medium};
      font-weight: ${theme.font.semibold};

      ${media.lessThan("medium")`
        margin-right: 0px;
        margin-bottom: ${theme.spacings.small};
      `}
    }

    b {
      color: ${theme.colors.paragraph};
      font-weight: ${theme.font.medium};
      font-size: ${theme.font.sizes.medium};
      margin-left: 5px;
      ${media.lessThan("medium")`
        margin-left: 0px;
        margin-top: ${theme.spacings.xxsmall};
        display: inline-block;
      `}
    }

    a {
      color: ${theme.colors.white};
      font-family: ${theme.font.family};
      font-size: ${theme.font.sizes.medium};
      text-decoration: none;
    }
  `}
`;

export const Text = styled.div`
  ${({ theme }) => css`
    color: ${theme.colors.paragraph};
    margin: ${theme.spacings.xxlarge} 0;
    max-width: 70%;
    width: 100%;

    ${media.lessThan("medium")`
      max-width: 100%;
    `}

    h2,
    h3,
    h4,
    h5,
    h6 {
      color: ${theme.colors.black};
    }

    img {
      ${media.lessThan("medium")`
        width: 100%;
        object-fit: contain;
        height: 20rem;

        margin-left: 0px;
        margin-top: ${theme.spacings.xxsmall};
        display: inline-block;
      `}
    }

    table {
      border: 1px solid ${theme.colors.grey};
      margin-bottom: ${theme.spacings.xxsmall};
    }
    th,
    tr {
      padding: ${theme.spacings.xsmall};
    }
    td {
      padding: ${theme.spacings.xsmall};
      border-bottom: 1px solid ${theme.colors.grey};
    }
    tr:last-child td,
    tr:last-child {
      border: none;
    }

    a {
      color: ${theme.colors.paragraph};
      font-weight: 600;
      text-decoration: underline;
    }

    p {
      display: inline-block;
      font-size: ${theme.font.sizes.medium};
      line-height: ${theme.font.sizes.xlarge};
      margin-bottom: ${theme.spacings.small};
      color: ${theme.colors.paragraph};

      strong {
        font-size: ${theme.font.sizes.medium};
        font-weight: ${theme.font.bold};
      }
    }

    h1 {
      font-size: ${theme.font.sizes.xxlarge};
      line-height: ${theme.font.sizes.xxlarge};
      font-weight: ${theme.font.bold};
      display: block;
      margin: ${theme.spacings.small} 0;
      strong {
        font-size: ${theme.font.sizes.xxlarge};
        font-weight: ${theme.font.bold};
      }
    }
    h2 {
      font-size: ${theme.font.sizes.xlarge};
      line-height: ${theme.font.sizes.xxlarge};
      font-weight: ${theme.font.bold};
      display: block;
      margin: ${theme.spacings.small} 0;
      strong {
        font-size: ${theme.font.sizes.xlarge};
        font-weight: ${theme.font.bold};
      }
    }
    h3 {
      font-size: ${theme.font.sizes.large};
      line-height: ${theme.font.sizes.xxlarge};
      font-weight: ${theme.font.bold};
      display: block;
      margin: ${theme.spacings.small} 0;
      strong {
        font-size: ${theme.font.sizes.large};
        font-weight: ${theme.font.bold};
      }
    }
    h4 {
      font-size: ${theme.font.sizes.xmedium};
      line-height: ${theme.font.sizes.xxlarge};
      font-weight: ${theme.font.normal};
      display: block;
      margin: ${theme.spacings.small} 0;
      strong {
        font-size: ${theme.font.sizes.xmedium};
        font-weight: ${theme.font.bold};
      }
    }
    h5 {
      font-size: ${theme.font.sizes.medium};
      font-weight: ${theme.font.normal};
      display: inline-block;
      margin-bottom: ${theme.spacings.small};
      strong {
        font-size: ${theme.font.sizes.medium};
        font-weight: ${theme.font.bold};
      }
    }
    h6 {
      font-size: ${theme.font.sizes.small};
      line-height: ${theme.font.sizes.xxlarge};
      font-weight: ${theme.font.light};
      display: block;
      margin: ${theme.spacings.small} 0;
      strong {
        font-size: ${theme.font.sizes.small};
        font-weight: ${theme.font.bold};
      }
    }

    ul,
    ol {
      margin-left: ${theme.spacings.small};

      li {
        font-size: ${theme.font.sizes.medium};
        line-height: ${theme.font.sizes.xlarge};

        strong {
          font-size: ${theme.font.sizes.medium};
          font-weight: ${theme.font.bold};
        }
      }
    }
  `}
`;
