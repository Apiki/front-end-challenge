import styled from "styled-components";

export const HeaderContainer = styled.header`
  background-image: linear-gradient(
    to right,
    ${({ theme }) => theme.colors.lightBackground},
    ${({ theme }) => theme.colors.darkBackground}
  );
`;

export const HeaderWrapper = styled.div`
  max-width: 1170px;
  height: 60px;
  margin: 0 auto;
  padding: 0 24px;

  display: flex;
  justify-content: flex-start;
  align-items: center;
`;

export const HeaderLogo = styled.img`
  height: 40px;
`;
