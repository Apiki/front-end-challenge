import styled from 'styled-components'

export const HeaderCategory = styled.header`
  padding: 1rem;

  background: ${(props) => props.theme['base-category']};
`

export const HomeContent = styled.main`
  margin: 1.5rem auto auto auto;
  max-width: 1100px;
  width: 100%;
  padding: 0 1rem;
`
