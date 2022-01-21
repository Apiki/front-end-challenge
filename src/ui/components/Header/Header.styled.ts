import styled from 'styled-components'
import { theme } from '../../../config'

export const Container = styled.div`
  width: 100%;
  height: 80px;
  background: ${theme.colors.white};

  nav {
    position: fixed;
    top: 0;
    width: 100%;
  }

  ul {
    text-align: center;
    margin-top: 30px;
  }

  li {
    display: inline;
    padding: 30px;
    transition: 0.5s;

    :hover {
      text-decoration: underline;
      color: ${theme.colors.blue};
    }
  }

  a {
    margin: 0 auto;
    color: ${theme.colors.neutral[900]}
  }
`
