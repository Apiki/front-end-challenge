import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
`;

export const Button = styled.button`
  background: #7159;
  font-size: 1em;
  margin: 1em;
  padding: 0.25em 5em;
  border-radius: 3px;
  color: #ffffff;
  outline: thin dotted;
  outline: 0px auto -webkit-focus-ring-color;
  outline-offset: 0px;
  transition: background 0.3s linear 0s;

  :hover {
    background-color: #ee82ee;
  }

  border: 2px solid transparent;
  a {
    text-decoration: none;
  }
`;
