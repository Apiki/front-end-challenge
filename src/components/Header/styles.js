import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  text-align: center;
  justify-content: space-around;
  height: 25vh;
  padding: 2rem;
  background: #40597A;
`;

export const Title = styled.h1`
  font-size: 4rem;
  color: #fff;
`

export const Link = styled.a`
  padding: 0.2rem;
  width: 5rem;
  height: 2rem;
  border-radius: 0.5rem;
  text-decoration: none;
  color: #fff;
  background-color: var(--btn-color);
  transition: filter 0.2s;

  display: flex;
  text-align: center;
  justify-content: center;

  &:hover {
    filter: brightness(0.9);
  }
`;

export const LinkContainer = styled.div`
  display: flex;
  text-align: center;
  justify-content: center;
  padding: 2rem;
`;
