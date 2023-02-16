import NextLink from "next/link";
import { Author } from "../Author";

import {
  Card,
  ContentWrapper,
  Image,
  Content
} from './style';

export function PostCard() {
  return (
    <Card>
      <Author 
        href= "https://lucianakyoko.com"
        image= "https://github.com/lucianakyoko.png"
        name= "Luciana Kyoko"
      />

      <ContentWrapper>
        <Image src="https://blog.apiki.com/wp-content/uploads/sites/2/2020/06/Anatomia-do-Gutenberg-o-editor-do-WordPress-1024x538.png"></Image>

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

          <NextLink className="link" href='/posts/slug-do-post'>Ler artigo</NextLink>
        </Content>
      </ContentWrapper>
    </Card>
  );
}