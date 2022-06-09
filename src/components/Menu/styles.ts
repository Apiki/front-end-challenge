import styled, { css } from "styled-components";
import media from "styled-media-query";

export const Wrapper = styled.menu`
  ${({ theme }) => css`
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: ${theme.spacings.xsmall} 0;
  `}
`;

export const IconWrapper = styled.div`
  ${({ theme }) => css`
    display: flex;
    align-items: center;
    justify-content: center;
    color: ${theme.colors.paragraph};
    cursor: pointer;
    width: 4rem;
    height: 4rem;
    padding: 5px;
    border-radius: ${theme.border.radius};
  `}
`;

export const MenuHeader = styled.div`
  ${({ theme }) => css`
    display: flex;
    justify-content: space-between;
    height: 60px;
    margin-top: 8px;
    margin-left: 5px;

    > svg {
      position: absolute;
      top: 0;
      right: 0;
      margin: ${theme.spacings.xxsmall} 0;
      cursor: pointer;
      display: flex;
      align-items: center;
      justify-content: center;
      color: ${theme.colors.paragraph};
      cursor: pointer;
      width: 4rem;
      height: 4rem;
      padding: 5px;
      border-radius: ${theme.border.radius};
    }
  `}

  ${({ theme }) => css`
    a {
      border: 0;
      background-color: ${theme.colors.secondary} !important;
      color: #461973;
      background: #f7f7f7;
      padding: 12px 4rem;
      white-space: nowrap;
      -webkit-text-decoration: none;
      text-decoration: none;
      font-weight: 600;
      display: -webkit-inline-box;
      display: -webkit-inline-flex;
      display: -ms-inline-flexbox;
      display: inline-flex;
      -webkit-align-items: center;
      -webkit-box-align: center;
      -ms-flex-align: center;
      align-items: center;
      -webkit-box-pack: center;
      -webkit-justify-content: center;
      -ms-flex-pack: center;
      justify-content: center;
      cursor: pointer;
      border-radius: 0.8rem;
      height: 4.7rem;
      font-size: 1.6rem;
      padding: 10px 2rem;
      -webkit-box-pack: center;
      -webkit-justify-content: center;
      -ms-flex-pack: center;
      justify-content: center;

      &:hover {
        background: ${theme.colors.secondary};
      }
    }
  `}
`;

export const MenuNav = styled.div`
  ${media.greaterThan("medium")`
    margin: 5px 0 0 5rem;
  `}

  a {
    ${({ theme }) => css`
      font-family: ${theme.font.family};
      color: ${theme.colors.secondary};
      position: relative;
      font-size: ${theme.font.sizes.large};
      font-weight: ${theme.font.medium};
      margin: 0 11px;
      text-decoration: none;
      text-align: center;
      line-height: ${theme.spacings.medium};

      &:hover {
        &::after {
          content: "";
          position: absolute;
          display: block;
          height: 0.2rem;
          background-color: ${theme.colors.secondary};
          animation: hoverAnimation 0.2s forwards;
        }
        @keyframes hoverAnimation {
          from {
            width: 0;
            left: 50%;
          }
          to {
            width: 100%;
            left: 0;
          }
        }
      }
    `}
  }
`;

export const MenuLink = styled.a``;

type MenuFullProps = {
  isOpen: boolean;
};

export const MenuFull = styled.nav<MenuFullProps>`
  ${({ theme, isOpen }) => css`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    background: ${theme.colors.white};
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    height: 100vh;
    overflow: hidden;
    transition: opacity 0.3s ease-in-out;
    opacity: ${isOpen ? 1 : 0};
    pointer-events: ${isOpen ? "all" : "none"};
    z-index: 1;

    img {
      margin: 10px;
    }

    ${MenuNav} {
      display: flex;
      align-items: center;
      justify-content: center;
      flex: 1;
      flex-direction: column;
    }

    ${MenuLink} {
      color: ${theme.colors.black};
      font-weight: ${theme.font.semibold};
      font-size: ${theme.font.sizes.medium};
      margin-bottom: ${theme.spacings.xsmall};
      transform: ${isOpen ? "translateY(0)" : "translateY(3rem)"};
      transition: transform 0.3s ease-in-out;
    }

    ${ContactBox} {
      transform: ${isOpen ? "translateY(0)" : "translateY(3rem)"};
      transition: transform 0.3s ease-in-out;
    }
  `}
`;

export const ContactBox = styled.div`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: left;
    padding: ${theme.spacings.xsmall} ${theme.spacings.small};
  `}
`;

export const MenuBarRight = styled.div`
  ${({ theme }) => css`
    margin-top: ${theme.spacings.xxsmall};
    display: flex;
    gap: 5px;
  `}

  ${({ theme }) => css`
    a {
      border: 0;
      background-color: transparent;
      color: #212121;
      background: #f7f7f7;
      padding: 12px 4rem;
      white-space: nowrap;
      -webkit-text-decoration: none;
      text-decoration: none;
      font-weight: 600;
      display: -webkit-inline-box;
      display: -webkit-inline-flex;
      display: -ms-inline-flexbox;
      display: inline-flex;
      -webkit-align-items: center;
      -webkit-box-align: center;
      -ms-flex-align: center;
      align-items: center;
      -webkit-box-pack: center;
      -webkit-justify-content: center;
      -ms-flex-pack: center;
      justify-content: center;
      cursor: pointer;
      border-radius: 0.8rem;
      height: 4rem;
      font-size: 1.4rem;
      padding: 10px 2rem;
      -webkit-box-pack: center;
      -webkit-justify-content: center;
      -ms-flex-pack: center;
      justify-content: center;

      &:hover {
        background: ${theme.colors.secondary};
      }
    }
  `}
`;

export const MenuBarLeft = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const MenuLinkFooterMenu = styled.a`
  ${({ theme }) => css`
    font-weight: ${theme.font.semibold};
    font-size: ${theme.font.sizes.medium};
    text-decoration: none;
  `}
`;

export const LogoBoxFooterMenuMobile = styled.a`
  ${({ theme }) => css`
    text-decoration: none;
    padding: ${theme.spacings.xsmall} ${theme.spacings.small};
  `}
`;
