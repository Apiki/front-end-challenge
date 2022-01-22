import styled from 'styled-components'
import { theme } from '../../../config'

export const ContainerNav = styled.div`
  width: 100%;
  height: 140px;
  background: ${theme.colors.white};

  nav {
    position: fixed;
    top: 0;
    width: 100%;
  }

  h1 {
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 30px;
    color: ${theme.colors.blue}
  }

  ul {
    text-align: center;
    margin-top: -20px;
  }

  li {
    display: inline;
    padding: 30px;
    transition: 0.5s;

    :hover {
      text-decoration: underline;
      color: ${theme.colors.orange};
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
`
