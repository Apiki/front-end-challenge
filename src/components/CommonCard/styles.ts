import styled from 'styled-components';

export const CommonCardContainer = styled.a`
  height: 20rem;
  border-radius: 8px;
  overflow: hidden;
  background: ${(props) => props.theme['gray-700']};

  display: flex;
  flex-direction: column;

  cursor: pointer;

  img {
    height: 10rem;
    width: 100%;
  }

  hr {
    width: 100%;
    border: 2px solid ${(props) => props.theme['yellow-500']};
  }

  &:hover {
    h3,
    p {
      text-decoration: underline;
    }
  }
`;

export const ContentCommonCard = styled.div`
  display: flex;
  flex-direction: column;
  padding: 1rem;
  gap: 0.5rem;

  p {
    font-size: 0.875rem;
  }
`;
