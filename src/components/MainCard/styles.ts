import styled from 'styled-components';

export const MainCardContainer = styled.div`
  height: 35rem;
  display: flex;
  border-radius: 4px;
  overflow: hidden;
  background: ${(props) => props.theme['gray-800']};

  img {
    width: 100%;
    height: 100%;
  }

  > div {
    width: 35rem;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    padding: 3rem 1.5rem 1.5rem;
  }
`;

export const ContentMainCard = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;

  h2 {
    color: ${(props) => props.theme.white};
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
