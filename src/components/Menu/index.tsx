import { useState } from "react";
import { MenuOutline as MenuIcon } from "@styled-icons/evaicons-outline/MenuOutline";
import { Close as CloseIcon } from "@styled-icons/ionicons-outline/Close";

import Logo from "../Logo";
import MediaMatch from "../MediaMatch";
import * as S from "./styles";

const Menu = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <S.Wrapper>
      <MediaMatch lessThan="large">
        <S.IconWrapper onClick={() => setIsOpen(true)}>
          <MenuIcon aria-label="Abrir menu" />
        </S.IconWrapper>
      </MediaMatch>

      <MediaMatch lessThan="large">
        <Logo size="mobile" />
      </MediaMatch>

      <MediaMatch greaterThan="large">
        <S.MenuBarLeft>
          <Logo size="desktop" />
          <S.MenuNav>
            <a href="https://apiki.com/" target="_blank" rel="noreferrer">
              Voltar ao site
            </a>
            <a href="/">Blog</a>
          </S.MenuNav>
        </S.MenuBarLeft>
      </MediaMatch>

      <MediaMatch lessThan="large">
        <S.IconWrapper></S.IconWrapper>
      </MediaMatch>

      <S.MenuFull aria-hidden={!isOpen} isOpen={isOpen}>
        <Logo size="mobile" />
        <S.MenuHeader>
          <CloseIcon
            aria-label="Fechar menu"
            onClick={() => setIsOpen(false)}
          />
        </S.MenuHeader>
        <S.MenuNav>
          <a href="https://apiki.com/" target="_blank" rel="noreferrer">
            Voltar ao site
          </a>
          <a href="/">Blog</a>
        </S.MenuNav>
      </S.MenuFull>
    </S.Wrapper>
  );
};

export default Menu;
