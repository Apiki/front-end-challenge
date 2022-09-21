import {
  FacebookLogo,
  GithubLogo,
  InstagramLogo,
  LinkedinLogo,
  TwitterLogo,
  YoutubeLogo,
} from 'phosphor-react';

import { HeaderContainer, SocialMediasContainer } from './styles';

export function Header() {
  return (
    <HeaderContainer>
      <a href='/'>
        <img
          src='https://apiki.com/wp-content/uploads/2020/11/logo-apiki-site-01.png'
          alt=''
        />
        <hr />
        <h1>Blog</h1>
      </a>
      <SocialMediasContainer>
        <a href='https://www.facebook.com/ApikiWordPress'>
          <FacebookLogo size={24} />
        </a>
        <a href='https://www.linkedin.com/company/apiki'>
          <LinkedinLogo size={24} />
        </a>
        <a href='https://www.instagram.com/apikiwordpress'>
          <InstagramLogo size={24} />
        </a>
        <a href='https://twitter.com/apikiWordPress'>
          <TwitterLogo size={24} />
        </a>
        <a href='https://www.youtube.com/channel/UC__ToR3hqjs1ZktdLIWqYFA'>
          <YoutubeLogo size={24} />
        </a>
        <a href='https://github.com/Apiki'>
          <GithubLogo size={24} />
        </a>
      </SocialMediasContainer>
    </HeaderContainer>
  );
}
