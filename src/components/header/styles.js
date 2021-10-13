import styled from 'styled-components'

export const Container = styled.header`
  width: 100vw;
  position: fixed;
  top: 0;
  background: #fbfbfb;
  box-shadow: 2px 2px 2px 2px #cbcbcb;
  padding: 0 1rem;
  z-index: 100;
`

export const Wrapper = styled.div`
  width: 100%;
  padding: 0.5rem 1rem;
  max-width: 1300px;
  margin: 0 auto;
`

export const Link = styled.a`
  img {
    width: 100%;
    max-width: 100px;

    @media only screen and (min-width: 620px) {
      max-width: 150px;
    }
    
    @media only screen and (min-width: 920px) {
      max-width: 200px;
    }
  }
`
