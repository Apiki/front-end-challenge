import styled from 'styled-components'

export const Container = styled.div`
  width: 100vw;
  max-width: 1300px;
  margin: 0 auto;
  padding: 1rem;
`

export const Wrapper = styled.div`
  width: 100%;
  max-width: 700px;
  margin-top: -100px;
  padding: 1rem;
  background: #fff;
  border-radius: 8px;
  box-shadow: 4px 4px 4px 4px rgba(0, 0, 0, 0.2);

  span {
    color: #7a7a7a;
  }
`

export const PostSubtitle = styled.div`
  p {
    color: #7a7a7a;
    font-weight: 600;
  }
`

export const Content = styled.div`
  img {
    width: 100%;
    height: auto;
  }

  figcaption {
    font-size: 0.725rem;
    color: #7a7a7a;
  }

  pre {
    background: #000;
    border: 1px solid #000;
    border-left: 8px solid #ff6600;
    border-radius: 4px 0 0 4px;
    color: #fff;
    page-break-inside: avoid;
    font-family: monospace;
    font-size: 15px;
    line-height: 1.6;
    margin-bottom: 1.6em;
    max-width: 100%;
    overflow: auto;
    padding: 1em 1.5em;
    display: block;
    word-wrap: break-word;

    ::-webkit-scrollbar {
      height: 4px;
    }
    ::-webkit-scrollbar-track {
      background: #fff;
    }
    ::-webkit-scrollbar-thumb {
      background: #aaa;
      border-radius: 50px;
    }
    ::-webkit-scrollbar-thumb:hover {
      background: #333;
    }
  }
`
