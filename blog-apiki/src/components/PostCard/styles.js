import styled from 'styled-components';

export const Button = styled.button`
  background: #7159;
  border-radius: 3px;
  color: #ffffff;
  font-size: 1em;
  padding: 0.25em 5em;
  margin: 1em;
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
  display: inline-block;
  border: solid 1px #ccc;
  box-shadow: 0 4px 20px 0 rgba(0, 0, 0, 0.3);
  height: 300px;
  margin: 5px 20px;
  padding: 5px;
  width: 260px;
  overflow: auto;
  vertical-align: top;
`;

export const Image = styled.img`
  width: 100%;
  max-height: 50%;
`;

export const Paragraph = styled.p`
  font-weight: 100;
  height: 70px;
  margin: 0px;
  padding: 10px;
  overflow: hidden;
`;
