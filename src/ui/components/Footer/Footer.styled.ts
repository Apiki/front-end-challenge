import styled from 'styled-components'
import { theme } from 'src/config'

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 40px;

  span {
    color: ${theme.colors.neutral[900]};

    animation: go-back 1s infinite alternate;

    @keyframes go-back {
      from {
        transform: translateY(20px);
      }
      to {
        transform: translateX(0);
      }
    }
  }
`
