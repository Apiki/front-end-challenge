import styled from "styled-components";
import NextImage from 'next/image'
import { Author as AuthorComponent } from "Components/Author/Author";

export const Card = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  max-width: 400px;
  background-color: #ffffff11;
  padding: 20px;
  cursor: pointer;
  transition: background-color 0.2s ease-in-out;

  &:hover {
    background-color: #ffffff22;
  }
`
export const Image = styled((props) => <div><NextImage {...props} layout="responsive" priority="1" height={400} width={720} /></div>)`
  border-radius: 12px;
`

export const Title = styled.h2`
  font-size: 20px;
`

export const Excerpt = styled.div`
  font-size: 14px;
  font-weight: 300;
`

export const Author = styled(AuthorComponent)`
  margin-top: auto;
  padding-top: 16px;
`