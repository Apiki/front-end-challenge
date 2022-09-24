import styled from 'styled-components';

export const CommonCardContainer = styled.div`
  height: 25rem;
  width: 15rem;
  border-radius: 8px;
  overflow: hidden;
  background: ${(props) => props.theme['gray-700']};

  display: flex;
  flex-direction: column;

  cursor: pointer;

  img {
    width: 100%;
    height: 30%;
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

  overflow: auto;

  p {
    text-align: justify;
    font-size: 0.875rem;

    display: -webkit-box;
    -webkit-line-clamp: 8; /** número de linhas que você quer exibir */
    -webkit-box-orient: vertical;
    overflow: hidden;
    text-overflow: ellipsis;
  }
`;
