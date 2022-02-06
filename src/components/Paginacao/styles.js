import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  text-align: center;
  justify-content: center;
`;

export const Button = styled.button`
    font-size: 1.5rem;
    padding: 1rem;
    margin-bottom: 2rem;
    border: none;
    border-radius: 1rem;
    color: #fff;
    width: 13.5rem;
    background-color: #3945E3;
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