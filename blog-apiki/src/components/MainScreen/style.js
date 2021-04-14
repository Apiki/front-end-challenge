import styled from 'styled-components';

export const Button = styled.button`
  background: #7159;
  border-radius: 3px;
  color: #ffffff;
  font-size: 1em;
  margin: 1em;
  padding: 0.25em 5em;
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

export const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  margin-top: 25px;
`;
