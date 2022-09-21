import styled from "styled-components";

export const Main_index = styled.main`
  @media (min-width: 760px) {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    padding: 0 5%;
    box-sizing: border-box;
    margin-bottom: 40px;
  }
`;

export const Main_index_div = styled.div`
  @media (min-width: 760px) {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    align-items: center;
    margin: 20px 0;
    /* div:nth-child(2) {
      border: 1px solid blue;
      height: 100px;
    } */
  }
`;
