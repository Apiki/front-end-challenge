import logo from "../../assets/images/logo-apiki-blog.webp";
import { ThemeProvider, useTheme } from "styled-components";
import { HeaderContainer, HeaderWrapper, HeaderLogo } from "./styles";
import { Link } from "react-router-dom";

export const Header = () => {
  const theme = useTheme();

  const changeTitle = () => {
    document.title = "Blog - Apiki";
  };

  return (
    <ThemeProvider theme={theme}>
      <HeaderContainer>
        <HeaderWrapper>
          <Link to="/">
            <HeaderLogo src={logo} onClick={() => changeTitle()} />
          </Link>
        </HeaderWrapper>
      </HeaderContainer>
    </ThemeProvider>
  );
};
