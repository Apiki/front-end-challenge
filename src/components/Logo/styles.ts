import styled, { css } from 'styled-components'

import { LogoProps } from '.'

const wrapperModifiers = {
  mobile: () => css`
    width: 150px;
    height: 40px;
    cursor: pointer;
  `,

  desktop: () => css`
    width: 186px;
    height: 45px;
    cursor: pointer;
  `
}

export const Wrapper = styled.div<LogoProps>`
  ${({ size }) => css`
    ${!!size && wrapperModifiers[size]}

    img{
      max-width: 150px;
    }
  `}
`
