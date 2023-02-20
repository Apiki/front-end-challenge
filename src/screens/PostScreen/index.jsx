import { ScrollToTopButton } from '@/components/ScrollToTopButton';
import { getPostCoverImage } from '@/utils/getPostImage';
import Head from 'next/head';
import { PostFooter } from './PostFooter';
import { PostHeader } from './PostHeader';

import {
  PostContainer,
  CoverImage,
  Content,
} from './style';

export function PostScreen({post}) {
  const og = post[0].yoast_head_json;
  const content = post[0].content.rendered;

  return (
    <>
      <Head>
        <title>{post[0].title.rendered} | Apiki Blog</title>
        <meta name="description" content={og.og_description} />

        <meta property='og:title' content={og.title}/>
        <meta property='og:image' content={og.og_image[0].url} />
        <meta property='og:description' content={og.og_description}/>
        <meta property='og:url' content={og.og_url} />
      </Head>

        <PostContainer>
          <CoverImage src={getPostCoverImage(post[0])} />
          <PostHeader post={post[0]} />

          <Content>
            <div className="post" dangerouslySetInnerHTML={{ __html: content}}/>
          </Content>

          <PostFooter 
            post={post[0]}
          />
          <ScrollToTopButton />
        </PostContainer>
    </>
  );
}