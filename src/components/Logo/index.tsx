import * as S from "./styles";

export type LogoProps = {
  size?: "mobile" | "desktop";
};

const Logo = ({ size = "desktop" }: LogoProps) => (
  <S.Wrapper size={size}>
    <a href="/">
      <img src="/img/logo-apiki.png" alt="Logomarca Apiki" />
    </a>
  </S.Wrapper>
);

export default Logo;
