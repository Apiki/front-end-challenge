import styled from "styled-components";
import palet from "../services/palet";

export const PostDetail = styled.main`
  display: flex;
  flex-direction: column;
  width: 100%;
  align-items: flex-start;
  justify-content: center;
`

export const Article = styled.article`
  margin-left: 80px;
  margin-bottom: 80px;
  width: 60%;
  span {
    color: ${palet.primary};
    font-weight: 400;
    font-size: 18px;
    line-height: 1.4;
  }
  h1 {
    margin-bottom: 8px;
  }
  h2 {
    margin-top: 24px;
    margin-bottom: 18px;
  }
  h3 {
    margin-top: 24px;
    margin-bottom: 18px;
  }
  h4 {
    margin-top: 24px;
    margin-bottom: 18px;
  }
  figure {
    max-width: 100%;
  }
  img {
    max-width: 100%;
    width: auto;
    height: auto;
    margin-top: 24px;
    margin-bottom: 24px;
  }
  
  p {
    line-height: 1.6;
    max-width: 100%;
  }
  table {
    font-size: 12px;
    margin-top: 24px;
    margin-bottom: 24px;
    thead {
      font-weight: 700;
      font-size: 14px;
      color: ${palet.primary};
    }
    tbody {
      background-color: #eee;
      color: ${palet.primary};
    }
    td {
      padding: 8px;
    }
  }

  iframe {
    max-width: 100%;
  }

  .wp-video {
    max-width: 100%;
  } 

  video {
    max-width: 100%;
    height: auto;
  }

  ul {
    padding-left: 32px;
    margin-top: 8px;
    margin-bottom: 8px;
  }

  ol {
    padding-left: 32px;
    margin-top: 8px;
    margin-bottom: 8px;
  }

  li {
    padding: 8px;
    font-size: 18px;
  }

  p {
    margin-bottom: 8px;
    font-size: 18px;
  }

  figcaption {
    margin-bottom: 8px;
    font-size: 12px;
    color: ${palet.primary};
  }

  pre.wp-block-code {
  background: #2b2b2b;
  padding: 1em;
  margin: 0.5em auto;
  overflow: auto;
  border-radius: 0.3em;
}

  code[class*='language-'], pre[class*='language-'] {
    color: #f8f8f2;
    background: none;
    font-family: 'Fira Code', Consolas, Menlo, Monaco, 'Andale Mono', 'Lucida Console', 'Lucida Sans Typewriter', 'DejaVu Sans Mono', 'Bitstream Vera Sans Mono', 'Liberation Mono', 'Nimbus Mono L', 'Courier New', Courier, monospace;
    text-align: left;
    white-space: pre;
    word-spacing: normal;
    word-break: normal;
    word-wrap: normal;
    line-height: 1.5;
    -moz-tab-size: 4;
    -o-tab-size: 4;
    tab-size: 4;
    -webkit-hyphens: none;
    -moz-hyphens: none;
    -ms-hyphens: none;
    hyphens: none;
  }

  .content-inner>* {
    padding-left: 0;
    padding-right: 0;
  }

  pre {
    color: #7b7b7b;
    background: #fafafa;
    border: 1px solid #eee;
    padding: 0.5em 1.5em 0.5em 1.5em;
    white-space: pre-wrap;
    word-wrap: break-word;
  }

  code, kbd, pre, samp {
    font-family: "Lucida Console",Monaco,monospace;
    font-size: .9em;
    padding: 0.2em 0.5em;
  }

  p, pre {
    margin: 0 0 1.75em;
    text-rendering: optimizeLegibility;
  }

  .wp-block-code code {
    display: block;
    white-space: pre-wrap;
    overflow-wrap: break-word;
  }

  code {
    color: #f8f8f2;
    padding-left: 0;
    border: none;
    overflow-x: initial;
  }

  @media screen and (max-width: 480px){
    width: 100%;
    margin: 0;
    padding: 24px;
  }
`;

export const Details = styled.div`
  display: flex;
  border-top: 2px solid #eee;
  padding-top: 8px;
  margin-top: 16px;
  p {
    margin-right: 4px;
    font-size: 12px;
    color: ${palet.primary};
  }
`;

export const AuthorDetail = styled.section`
  display: flex;
  width: 80%;
  align-items: center;
  justify-content: center;
  padding: 24px;
  border: 1px solid #eee;
  margin-top: 46px;
  
  @media screen and (max-width: 480px){
    flex-direction: column;
    width: 100%;
  }
  
  img {
    border-radius: 50%;
    width: 90px;
  }
  svg {
    font-size: 90px;
    color: ${palet.primary};
  }
  div {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    margin-left: 24px;
    @media screen and (max-width: 480px){
    margin: 0;
    align-items: center;
    justify-content: center;
    text-align: center;
  }
    
    p {
      color: ${palet.highligth};
      line-height: 2;
      font-weight: 500;
    }
    span {
      color: ${palet.primary};
      width: 100%;
      line-height: 1.6;
    }
  }
`;