import NextLink from "next/link";
import { SocialLinks } from "../SocialLinks";

import {
  HeaderContainer,
} from './style';

export function Header() {
  return (
    <HeaderContainer>
      <div className="header-content">
      <NextLink href='/'>
        <img 
          className="header-content__logo" 
          src="/logo.png" 
          alt="Logo da Apiki Blog" 
        />
      </NextLink>
        <SocialLinks />
      </div>
    </HeaderContainer>
  );
}