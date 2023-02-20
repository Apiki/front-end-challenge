import { HeartStraight } from "phosphor-react";

import { 
  FooterContainer
} from './style';

export function Footer() {
  const date = new Date();
  const currentYear = date.getFullYear();

  return (
    <FooterContainer>
      <p className="footer-text">
        Feito com <span><HeartStraight weight="fill" /></span> pela <a className="link" href="https://lucianakyoko.com" target="_blank" rel="noopener noreferrer">Luciana Kyoko</a>.
      </p>
      <p className="footer-text">
        <sup><span>&#169;</span></sup>{currentYear}. Todos os direitos reservados.
      </p>
      <a href="http://" target="_blank" rel="noopener noreferrer"></a>
    </FooterContainer>
  );
}