import NextLink from "next/link";

import {
  Card,
  ProfileWrapper,
  ContentWrapper,
  Image,
  Content
} from './style';

export function PostCard() {
  return (
    <Card>
      <ProfileWrapper
        href="http://" 
        target="_blank" 
        rel="noopener noreferrer"
      >
        <img 
          className="profile-image" 
          src="https://github.com/lucianakyoko.png" 
          alt="foto de perfil de Luciana Kyoko"
        />
        <span className="profile-author">Nome do autor</span>
      </ProfileWrapper>

      <ContentWrapper>
        <Image></Image>

        <Content>
          <div className="detail">
            <h3 className="detail__title">Titulo do post</h3>
            <div className="detail__date">
              <span>4 de agosto de 2022</span>
              <span>|</span>
              <span>dá pra ler em <span className="time">5</span> minutinhos</span>
            </div>
          </div>

          <p className="intro">Reunimos as grandes vantagens do editor Gutenberg. Você precisa considerar o uso e explorar os benefícios desse novo editor do WordPress.</p>

          <NextLink className="link" href='/posts/'>Ler artigo</NextLink>
        </Content>
      </ContentWrapper>
    </Card>
  );
}