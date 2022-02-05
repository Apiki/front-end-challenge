import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  text-align: center;
  justify-content: center;
`;

export const Button = styled.button`
    padding: 0.5rem;
    margin-bottom: 2rem;
    border: none;
    border-radius: 1rem;
    color: #fff;
    width: 10rem;
    background-color: var(--btn-color);
    transition: filter 0.2s;
    animation: fadein 2s;

    &:hover {
        filter: brightness(0.9);
    }

    @keyframes fadein {
      from { opacity: 0; }
      to   { opacity: 1; }
    }
`;