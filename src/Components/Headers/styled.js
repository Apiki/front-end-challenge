import styled from "styled-components";

export const Header_styled = styled.header`
  //Tamanho Desktop
  @media (min-width: 750px) {
    position: fixed;
    display: flex;
    align-items: center;
    width: 100%;
    height: 80px;
    background: rgb(0, 0, 0, 0.9);
    border-bottom: 2px outset rgb(255, 244, 189, 0.5);
    padding: 10px 0;
    box-sizing: border-box;

    //Primeira Div dentro do Header
    div:nth-child(1) {
      box-sizing: border-box;
      display: flex;
      width: 60%;
      height: 100%;
      align-items: center;
    }

    //Segunda Div dentro do Header
    div:nth-child(2) {
      width: 100%;
      ul {
        display: flex;
        justify-content: flex-end;
        align-items: center;
        li {
          margin-right: 5%;
          list-style-type: none;
          cursor: pointer;
          a {
            text-decoration: none;
            font-size: 1.2em;
            font-weight: 600;
            color: white;
            :hover {
              color: #ffd983;
            }
          }
        }
      }
    }
  }
  @media (min-width: 320px) and(max-width: 759px) {
    position: fixed;
    display: flex;
    align-items: center;
    width: 100%;
    height: 80px;
    background: rgb(0, 0, 0, 0.9);
    border-bottom: 2px outset rgb(255, 244, 189, 0.5);
    padding: 10px 0;
    box-sizing: border-box;

    //Primeira Div dentro do Header
    div:nth-child(1) {
      box-sizing: border-box;
      display: flex;
      width: 60%;
      height: 100%;
      align-items: center;
    }

    //Segunda Div dentro do Header
    div:nth-child(2) {
      width: 100%;
      ul {
        display: flex;
        justify-content: flex-end;
        align-items: center;
        li {
          margin-right: 5%;
          list-style-type: none;
          cursor: pointer;
          a {
            text-decoration: none;
            font-size: 1.2em;
            font-weight: 600;
            color: white;
            :hover {
              color: #ffd983;
            }
          }
        }
      }
    }
  }
`;
