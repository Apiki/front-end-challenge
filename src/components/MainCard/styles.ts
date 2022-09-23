import styled from 'styled-components';
import Link from 'next/link';

export const MainCardContainer = styled.div`
  height: 35rem;
  width: 90rem;
  display: flex;
  border-radius: 4px;
  overflow: hidden;
  background: ${(props) => props.theme['gray-800']};

  img {
    cursor: pointer;
    width: 60rem;
    height: 100%;
  }

  > div:last-child {
    /* width: 30rem; */
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    padding: 3rem 1.5rem 1.5rem;
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
