import styled from "styled-components";

export const PostContainer = styled.main`
  display: flex;
  flex-direction: column;
  width: 100%;
  min-height: 100vh;
  align-items: center;
  padding: 16px;
  justify-content: center;

  @media screen and (min-width: 800px){
    padding: 46px;
  }
`

export const BtnContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Btn = styled.button`
  padding: 8px 16px;
  border-radius: 8px;
  background: none;
  margin: 8px;
  border: 1px solid #eee;
  transition: 0.4s;
  cursor: pointer;
  :hover {
    background-color: #eee;
  }
  :active {
    padding: 6px 14px;
  }
`;

export const PageCount = styled.p`
  font-size: 12px;
  align-self: center;
`;