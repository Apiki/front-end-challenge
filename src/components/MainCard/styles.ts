import styled from 'styled-components';

export const MainCardContainer = styled.div`
  height: 35rem;
  width: 90rem;
  display: flex;
  border-radius: 4px;
  overflow: hidden;
  background: ${(props) => props.theme['gray-800']};

  @media (max-width: 1440px) {
    width: 70rem;
  }

  @media (max-width: 1000px) {
    height: 20rem;
    width: 50rem;
  }

  @media (max-width: 600px) {
    height: 25rem;
    width: 35rem;
  }

  img {
    cursor: pointer;
    width: 80%;
    height: 100%;

    @media (max-width: 1440px) {
      width: 70%;
    }

    @media (max-width: 1000px) {
      width: 55%;
    }
  }

  > div:last-child {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    padding: 3rem 1.5rem 1.5rem;

    @media (max-width: 1000px) {
      padding: 1rem;
    }
  }
`;

export const ContentMainCard = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  gap: 1rem;

  cursor: pointer;

  h2 {
    color: ${(props) => props.theme.white};
  }

  &:hover {
    text-decoration: underline;
  }
`;

export const FooterMainCard = styled.footer`
  display: flex;
  align-items: center;
  gap: 1rem;

  color: ${(props) => props.theme['gray-300']};

  button {
    color: ${(props) => props.theme['gray-300']};
    border-radius: 1000px;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 0.25rem;

    transition: background 0.2s;

    svg {
      height: 2rem;
      width: 2rem;
    }

    &:hover {
      background: ${(props) => props.theme['gray-600']};
    }
  }
`;
