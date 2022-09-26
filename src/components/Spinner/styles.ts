import styled from "styled-components";

export const SpinnerContainer = styled.div`
  margin: 0 auto;
  align-self: center;
  justify-self: center;
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  > div {
    width: 2rem;
    height: 2rem;
    position: relative;
    animation: sk-chase 2.5s infinite linear both;
    .sk-chase-dot {
      width: 100%;
      height: 100%;
      position: absolute;
      left: 0;
      top: 0;
      animation: sk-chase-dot 2s infinite ease-in-out both;
    }
    .sk-chase-dot:before {
      content: "";
      display: block;
      width: 25%;
      height: 25%;
      background-color: ${(props) => props.theme['gray-900']};
      border-radius: 100%;
      animation: sk-chase-dot-before 2s infinite ease-in-out both;
    }
    .sk-chase-dot:nth-child(1) {
      animation-delay: -1.1s;
    }
    .sk-chase-dot:nth-child(2) {
      animation-delay: -1s;
    }
    .sk-chase-dot:nth-child(3) {
      animation-delay: -0.9s;
    }
    .sk-chase-dot:nth-child(4) {
      animation-delay: -0.8s;
    }
    .sk-chase-dot:nth-child(5) {
      animation-delay: -0.7s;
    }
    .sk-chase-dot:nth-child(6) {
      animation-delay: -0.6s;
    }
    .sk-chase-dot:nth-child(1):before {
      animation-delay: -1.1s;
    }
    .sk-chase-dot:nth-child(2):before {
      animation-delay: -1s;
    }
    .sk-chase-dot:nth-child(3):before {
      animation-delay: -0.9s;
    }
    .sk-chase-dot:nth-child(4):before {
      animation-delay: -0.8s;
    }
    .sk-chase-dot:nth-child(5):before {
      animation-delay: -0.7s;
    }
    .sk-chase-dot:nth-child(6):before {
      animation-delay: -0.6s;
    }
    @keyframes sk-chase {
      100% {
        transform: rotate(360deg);
      }
    }
    @keyframes sk-chase-dot {
      80%,
      100% {
        transform: rotate(360deg);
      }
    }
    @keyframes sk-chase-dot-before {
      50% {
        transform: scale(0.4);
      }
      100%,
      0% {
        transform: scale(1);
      }
    }
  }
`;