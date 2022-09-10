import styled from 'styled-components'

export const CardContainer = styled.div`
  width: 100%;

  display: grid;
  grid-template-columns: 8.25rem 1fr;
  gap: 1rem;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }


  & + & {
    margin-top: 1rem;
  }

  @media (min-width: 600px) {
    grid-template-columns: 12.5rem 1fr;
 }

`

export const CardContent = styled.div`
  a {
    display: block;
    margin-top: 2rem;
  }
`
