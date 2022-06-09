import { Facebook as FacebookIcon } from "@styled-icons/fa-brands/Facebook";
import { Instagram as InstagramIcon } from "@styled-icons/fa-brands/Instagram";
import { Twitter as TwitterIcon } from "@styled-icons/fa-brands/Twitter";
import { LinkedinIn as LinkedinInIcon } from "@styled-icons/fa-brands/LinkedinIn";
import { Youtube as YoutubeIcon } from "@styled-icons/fa-brands/Youtube";

import * as S from "./styles";

const Footer = () => (
  <S.Wrapper>
    <S.Content>
      <S.Column>
        <S.Title>Navegação</S.Title>
        <a
          href="https://apiki.com/empresa-especializada-em-wordpress/"
          target="_blank"
          rel="noreferrer"
        >
          Sobre a Apiki
        </a>
        <a href="https://apiki.com/carreira/" target="_blank" rel="noreferrer">
          Trabalhe na Apiki
        </a>
        <a href="https://blog.apiki.com/" target="_blank" rel="noreferrer">
          Blog
        </a>
        <a
          href="https://apiki.com/hospedagem-wordpress-wp-host/"
          target="_blank"
          rel="noreferrer"
        >
          WP Host
        </a>
        <a
          href="https://apiki.com/manutencao-wordpress-wp-care/"
          target="_blank"
          rel="noreferrer"
        >
          WP Care
        </a>
        <a href="https://apiki.com/" target="_blank" rel="noreferrer">
          Página inicial
        </a>
      </S.Column>
      <S.Column>
        <S.Title>Endereços</S.Title>
        <S.Paragraph>
          <strong>Governador Valadares – MG</strong>
          <br />
          <br />
          Avenida Minas Gerais 700, Lojas 15 e 16, Centro.
          <br />
          CEP: 35010-151
          <br />
          +55 33 3278-1002
          <br />
        </S.Paragraph>
        <S.Paragraph>
          <strong>São Paulo – SP</strong>
          <br />
          <br />
          Rua Oscar Freire, 2379
          <br />
          Pinheiros. CEP: 05409-012
          <br />
        </S.Paragraph>
      </S.Column>
      <S.Column>
        <S.Title>Links Úteis</S.Title>
        <a
          href="https://apiki.com/seguranca-wordpress/"
          target="_blank"
          rel="noreferrer"
        >
          Segurança para WordPress
        </a>
        <a
          href="https://apiki.com/performance-wordpress/"
          target="_blank"
          rel="noreferrer"
        >
          Performance para WordPress
        </a>
        <a
          href="https://apiki.com/seo-wordpress/"
          target="_blank"
          rel="noreferrer"
        >
          SEO para WordPress
        </a>
        <a href="https://apiki.com/wordpress/" target="_blank" rel="noreferrer">
          Sobre o WordPress
        </a>
      </S.Column>
      <S.Column>
        <S.Title>Mídias sociais</S.Title>
        <S.SocialNetWork>
          <a
            href="https://www.facebook.com/ApikiWordPress"
            target="_blank"
            rel="noreferrer"
          >
            <FacebookIcon />
          </a>
          <a
            href="https://www.instagram.com/apikiwordpress/"
            target="_blank"
            rel="noreferrer"
          >
            <InstagramIcon />
          </a>
          <a
            href="https://twitter.com/apikiWordPress"
            target="_blank"
            rel="noreferrer"
          >
            <TwitterIcon />
          </a>
          <a
            href="https://www.linkedin.com/company/apiki/"
            target="_blank"
            rel="noreferrer"
          >
            <LinkedinInIcon />
          </a>
          <a
            href="https://www.youtube.com/channel/UC__ToR3hqjs1ZktdLIWqYFA"
            target="_blank"
            rel="noreferrer"
          >
            <YoutubeIcon />
          </a>
        </S.SocialNetWork>
      </S.Column>
    </S.Content>
    <S.Copyright>
      <S.CopyrightText>
        2021. Apiki WordPress. Todos os Direitos Reservados.
      </S.CopyrightText>
    </S.Copyright>
  </S.Wrapper>
);

export default Footer;
