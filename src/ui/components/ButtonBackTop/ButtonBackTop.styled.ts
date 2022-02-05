import styled from 'styled-components'
import { theme } from 'src/config'

export const Content = styled.div`
  button {
    background: ${theme.colors.orange[400]};
    color: ${theme.colors.white};
    width: 50px;
    height: 50px;
    border: 0;
    border-radius: 50%;
    margin: 0 0 50px 40px;
  }
`
