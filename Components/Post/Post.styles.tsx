import styled, { css } from "styled-components";
import NextImage from 'next/image'
import { Author as AuthorComponent } from "Components/Author/Author";

export const Post = styled.div`
  max-width: 980px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  gap: 16px;
`

export const Title = styled.h2`
  font-size: 24px;
  text-align: center;


`

export const Image = styled((props) => <div><NextImage {...props} layout="responsive" priority="1" height={400} width={720} /></div>)`
  border-radius: 12px;
`

export const Content = styled.div`
  p {
    font-size: 16px;
    line-height: 1.2;
    margin-bottom: 8px;
  }

  a {
    text-decoration: none;
    color: #dc660e;

    &:hover {
      color: #dc990e;
    }
  }

  figure {
    display: flex;
    margin: 32px 0;
  }

  img {
    max-width: 100%;
    height: auto;
    margin: auto;
  }

  h2 {
    color: #2a9df4;
    font-size: 20px;
    margin: 32px 0 12px;
  }
`
