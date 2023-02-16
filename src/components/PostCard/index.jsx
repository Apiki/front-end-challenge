import NextLink from "next/link";
import { formatDate } from "@/utils/formatDate";
import { getPostCoverImage } from "@/utils/getPostImage";
import { getReadingTime } from "@/utils/getReadingTime";
import { Author } from "../Author";

import {
  Card,
  ContentWrapper,
  Image,
  Content
} from './style';

export function PostCard({post}) {
  const timeReading = getReadingTime(post);
  const imageSrc = getPostCoverImage(post);
  const publishedDate = formatDate(post.date);
  const isPostAuthorExist = post._embedded.author[0].name;
  const author = post._embedded.author[0]

  return (
    <Card>
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

      <ContentWrapper>
        <Image src={imageSrc}></Image>

        <Content>
          <div className="detail">
            <h3 className="detail__title">{post.title.rendered}</h3>
            <div className="detail__date">
              <span>{publishedDate}</span>
              <span>|</span>
              <span>dá pra ler em <span className="time">{timeReading}</span> minutinhos</span>
            </div>
          </div>

          <p className="intro">{post.yoast_head_json.description}</p>

          <NextLink className="link" href={`/posts/${post.slug}`}>Ler artigo</NextLink>
        </Content>
      </ContentWrapper>
    </Card>
  );
}