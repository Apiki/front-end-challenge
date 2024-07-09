import { Author } from "@/components/Author";
import NextLink from "next/link";
import { House } from "phosphor-react";

import {
  Footer,
} from './style';

export function PostFooter({post}) {
  const isPostAuthorExist = post._embedded.author[0].name;
  const author = post._embedded.author[0];
  const aboutAuthor = post._embedded.author[0].description;

  return(
    <Footer>
      <div className="about">
        {isPostAuthorExist ? 
          <Author 
            href= {author.link}
            image= {author.avatar_urls[96]}
            name= {author.name}
          /> :
          <Author 
            image= "/none.png"
          />
        }

        <p className="about__text">{isPostAuthorExist ? aboutAuthor : ''}</p>
      </div>

      <NextLink className="home-btn" href='/'>
        <House className="icon" weight="fill" />home
      </NextLink>
    </Footer>
  );
}