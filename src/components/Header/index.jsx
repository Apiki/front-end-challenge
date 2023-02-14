import { SocialLinks } from "../SocialLinks";

import {
  HeaderContainer,
} from './style';


export function Header() {
  return (
    <HeaderContainer>
      <div className="header-content">
        <img className="header-content__logo" src="/logo.png" alt="Logo da Apiki Blog" />
        <SocialLinks />
      </div>
    </HeaderContainer>
  );
}