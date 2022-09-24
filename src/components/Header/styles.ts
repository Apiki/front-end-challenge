import styled from 'styled-components';

export const HeaderContainer = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;

  padding: 1rem 3rem;
  background: ${(props) => props.theme['gray-600']};
`;

export const BlogLogo = styled.div`
  text-decoration: none;
  display: flex;
  align-items: center;
  gap: 0.75rem;
  cursor: pointer;

  color: ${(props) => props.theme['gray-300']};

  hr {
    height: 2rem;
    border: 1px solid ${(props) => props.theme['gray-500']};
  }

  img {
    width: 10rem;
  }
`;

export const SocialMediasContainer = styled.div`
  display: flex;
  gap: 0.5rem;

  a {
    border: 1px solid ${(props) => props.theme['blue-700']};
    border-radius: 8px;

    display: flex;
    align-items: center;
    justify-content: center;
    padding: 0.5rem;
    color: ${(props) => props.theme['gray-300']};

    transition: color 0.4s, background 0.4s;

    &:hover {
      border: 1px solid ${(props) => props.theme['blue-500']};
      color: ${(props) => props.theme.white};
    }
  }
`;
