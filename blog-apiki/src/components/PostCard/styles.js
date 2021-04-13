import styled from 'styled-components';

export const Button = styled.button`
  background: #7159;
  font-size: 1em;
  margin: 1em;
  padding: 0.25em 5em;
  border-radius: 3px;
  outline: thin dotted;
  outline: 0px auto -webkit-focus-ring-color;
  outline-offset: 0px;
  transition: background 0.3s linear 0s;

  :hover {
    background-color: #ee82ee;
  }

  border: 2px solid transparent;
  a {
    color: #ffffff;
    text-decoration: none;
  }
`;

export const Container = styled.div`
  display: inline-block;
  border: solid 1px #ccc;
  box-shadow: 0 4px 20px 0 rgba(0, 0, 0, 0.3);
  height: 300px;
  width: 260px;
  margin: 5px 20px;
  padding: 5px;
  vertical-align: top;
  overflow: auto;
`;

export const Paragraph = styled.p`
  padding: 10px;
  height: 70px;
  overflow: hidden;
  font-weight: 100;
  margin: 0px;
`;
