import styled from 'styled-components'
import { theme } from 'src/config'

export const ContainerNav = styled.div`
  height: 100px;

  nav {
    position: fixed;
    width: 100%;
    background: ${theme.colors.white};
    height: 100px;
    box-shadow: 0 0.1px 0.5px black;
    z-index: 1;
  }

  h1 {
    margin: 30px 70px 90px 50px;
    color: ${theme.colors.blue[500]}
  }

  ul {
    text-align: center;
    margin-top: -120px;
  }

  li {
    display: inline;
    padding: 30px;
    transition: 0.5s;

    :hover {
      text-decoration: underline;
      color: ${theme.colors.orange[400]};
    }
  }

  a {
    margin: 0 auto;
    color: ${theme.colors.neutral[900]}
  }
`

export const ContainerHeader = styled.div`
  width: 100%;
  height: 400px;
  background: linear-gradient(45deg, #188ecc, #4cdbec);

  @media (max-width: 626px) {
    height: 500px;
  }
`

export const ContentHeader = styled.div`
  padding: 70px;

  span {
    font-size: 23px;
    display: flex;
    align-items: center;
    justify-content: center;
    color: ${theme.colors.white};
    text-align: center;
    margin-top: 60px;
  }

  h1 {
    display: flex;
    align-items: center;
    justify-content: center;
    color: ${theme.colors.white};
    text-align: center;
    animation: go-back 1s infinite alternate;

    @keyframes go-back {
      from {
        transform: translateY(50px);
      }
      to {
        transform: translateX(0);
      }
    }
  }
`
