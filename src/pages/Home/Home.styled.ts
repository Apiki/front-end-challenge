import styled from 'styled-components'
import { theme } from 'src/config'

export const Content = styled.div`
  h2 {
    color: ${theme.colors.neutral[900]};
    margin: 60px;
  }
`

export const ContainerMain = styled.div`
  padding: 60px;

  ul {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(450px, 250px));
    text-align: center;
    justify-content: center;
    margin: 0 0 20px 0;
    grid-row-gap: 10px;

    li {
      a {
        color: ${theme.colors.orange[400]}
      }
    }
  }

  img {
    width: 400px;
    height: 300px;
    transition: 1s;
    border-radius: 8px;

    :hover {
      width: 420px;
      height: 320px;
      opacity: 85%;
    }
  }
`
