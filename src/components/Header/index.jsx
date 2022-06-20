import logo from "../../assets/images/logo-apiki-blog.webp";
import { ThemeProvider, useTheme } from "styled-components";
import { HeaderContainer, HeaderWrapper, HeaderLogo } from "./styles";

export const Header = () => {
  const theme = useTheme();

  return (
    <ThemeProvider theme={theme}>
      <HeaderContainer>
        <HeaderWrapper>
          <a target="_blank" href="https://blog.apiki.com/">
            <HeaderLogo src={logo} />
          </a>
        </HeaderWrapper>
      </HeaderContainer>
    </ThemeProvider>
  );
};
