import styled from 'styled-components'

export const ButtonContainer = styled.div`
  margin: 1rem 0;

  width: 100%;

  display: flex;
  gap: 1rem;
  align-items: center;
  justify-content: center;

  button {
    background: ${(props) => props.theme.blue};
    border: 0;

    padding: 0.5rem;
    cursor: pointer;

    &:disabled {
      filter: brightness(0.6);
      cursor: not-allowed;
    }
  }
`
