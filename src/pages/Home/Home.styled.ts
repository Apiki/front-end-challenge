import styled from 'styled-components'
import { theme } from 'src/config'

export const Content = styled.div`
  h2 {
    color: ${theme.colors.neutral[900]};
    padding: 80px 0 0 120px;
  }
`

export const ContainerMain = styled.div`
  padding: 60px;

  ul {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(346px, 420px));
    text-align: center;
    justify-content: center;
    margin: 0 0 20px 0;
    grid-row-gap: 10px;
  }
`

export const List = styled.li`
  img {
    width: 400px;
    height: 300px;
    transition: 1s;
    border-radius: 8px;

    :hover {
      width: 420px;
      height: 320px;
    }
  }

  a {
    color: ${theme.colors.orange[400]}
  }
`

export const ButtonLoadMore = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  button {
    background: none;
    color: ${theme.colors.orange[400]};
    border: 0;
    font-size: 20px;
    text-decoration: underline;
  }
`
