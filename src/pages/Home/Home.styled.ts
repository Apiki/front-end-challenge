import styled from 'styled-components'
import { theme } from 'src/config'

export const Content = styled.div`
  h2 {
    color: ${theme.colors.neutral[900]};
    margin: 60px;
  }
`

export const ContainerMain = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  img {
    width: 200px;
    height: 200px;
  }
`
