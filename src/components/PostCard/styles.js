import styled from 'styled-components';

export const CardContainer = styled.div`
  background-color: #40597A;
  border-radius: 1rem;
  padding: 1rem;
  width: 22rem;
  display: flex;
  text-align: center;
  justify-content: center;
  flex-wrap: wrap;
  flex-direction: row;
  margin: 2rem 0.5rem 1rem;
  animation: fadein 0.5s;

  @keyframes fadein {
    from { opacity: 0; }
    to   { opacity: 1; }
  }
`;

export const Image = styled.img`
  height: 10rem;
  width: 22rem;
`;

export const ContentCard = styled.div`
  display: flex;
  text-align: center;
  justify-content: center;
  flex-direction: column;

  color: var(--background);
`;

export const Link = styled.a`
  padding: 0.5rem;
  width: 15rem;
  border-radius: 0.5rem;
  text-decoration: none;
  color: #fff;
  background-color: var(--btn-color);
  transition: filter 0.2s;
  margin: 1rem auto;

  &:hover {
    filter: brightness(0.9);
  }
`
