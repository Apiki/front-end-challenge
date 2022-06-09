import styled, { css } from 'styled-components'
import media from 'styled-media-query'

export const Wrapper = styled.footer`
  ${({ theme }) => css`
    background-color: ${theme.colors.secondary};
    padding: ${theme.spacings.large} 0;
    ${media.greaterThan('medium')`
      padding: ${theme.spacings.large} 0;
    `}
  `}
`
export const Content = styled.div`
  ${({ theme }) => css`
    max-width: ${theme.grid.container};
    margin: 0 auto;
    display: grid;
    grid-template-columns: 1fr;
    gap: ${theme.grid.gutter};
    padding: ${theme.spacings.large} calc(${theme.grid.gutter} / 2);

    ${media.greaterThan('medium')`
      max-width: 127rem;
      grid-template-columns: repeat(4, 1fr);
      border-bottom: 1px solid ${theme.colors.white};
      padding: ${theme.spacings.xxlarge} calc(${theme.grid.gutter} / 2);
    `}
    ${media.lessThan('large')`
      padding: ${theme.spacings.xxlarge} calc(${theme.grid.gutter} / 2);
    `}

    ${media.greaterThan('huge')`
      padding: ${theme.spacings.xxlarge} 0;
    `}
  `}
`

export const Column = styled.div`
  ${({ theme }) => css`
    margin-bottom: 40px;
    padding-bottom: 20px;
    ${media.lessThan('medium')`
      border-bottom: 1px solid #ad1f4a;
    `}
    a {
      font-family: ${theme.font.family};
      font-size: ${theme.font.sizes.medium};
      color: ${theme.colors.white};
      display: block;
      text-decoration: none;
      margin-bottom: ${theme.spacings.xsmall};
      &:hover {
        color: ${theme.colors.grey};
      }
    }
  `}
`

export const Paragraph = styled.p`
  ${({ theme }) => css`
    display: block;
    font-family: ${theme.font.family};
    font-size: ${theme.font.sizes.medium};
    color: ${theme.colors.white};
    margin-bottom: ${theme.spacings.xlarge};
  `}
`

export const SocialNetWork = styled.div`
  ${({ theme }) => css`
    display: flex;
    align-items: center;

    a {
      color: ${theme.colors.white};
    }

    a > svg {
      width: 23px;
      margin-right: 3rem;

      &:hover {
        color: ${theme.colors.grey};
      }
    }
  `}
`

export const Title = styled.h4`
  ${({ theme }) => css`
    font-size: ${theme.font.sizes.medium};
    color: ${theme.colors.white};
    margin-bottom: ${theme.spacings.small};
  `}
`

export const Copyright = styled.div`
  ${({ theme }) => css`
    max-width: ${theme.grid.container};
    margin: 0 auto;
    display: flex;
    padding: ${theme.spacings.large} calc(${theme.grid.gutter} / 2) 0;

    ${media.lessThan('medium')`
      display: block;
    `}
  `}
`
export const CopyrightText = styled.div`
  ${({ theme }) => css`
    font-size: ${theme.font.sizes.small};
    color: ${theme.colors.white};
    font-weight: ${theme.font.normal};
    margin-bottom: ${theme.spacings.xxsmall};
    display: flex;
    ${media.lessThan('medium')`
      display: block;
    `}
    text-align: center;
    ${media.lessThan('medium')`
      margin-top: ${theme.spacings.medium};
    `}
    ${media.greaterThan('medium')`
      margin-right: ${theme.spacings.medium};
    `}
  `}
`