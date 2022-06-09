import { Container } from "../../components/Container";
import Footer from "../../components/Footer";
import Menu from "../../components/Menu";

import * as S from "./styles";

export type BaseTemplateProps = {
  children: React.ReactNode;
};

const Base = ({ children }: BaseTemplateProps) => (
  <S.Wrapper>
    <S.MenuTop>
      <Container>
        <Menu />
      </Container>
    </S.MenuTop>

    <S.Content>{children}</S.Content>

    <section>
      <Footer />
    </section>
  </S.Wrapper>
);

export default Base;
