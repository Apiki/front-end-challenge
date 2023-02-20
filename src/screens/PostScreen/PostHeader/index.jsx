import { Author } from "@/components/Author";
import { ShareButtons } from "@/components/ShareButtons";
import { formatDate } from "@/utils/formatDate";
import { getReadingTime } from "@/utils/getReadingTime";

import {
  Header,
} from './style';

export function PostHeader({post}) {
  const isPostAuthorExist = post._embedded.author[0].name;
  const author = post._embedded.author[0];
  const timeReading = getReadingTime(post);
  const publishedDate = formatDate(post.date);

  return (
    <Header>
      <h2 className='title'>{post.title.rendered}</h2>
      <p className='subtitle'>{post.yoast_head_json.description}</p>

      <div className="wrapper">
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
    
        <div className='date'>
          <span>{publishedDate}</span>
          <span>|</span>
          <span>Dá pra ler em <span className='minutes'>{timeReading}</span> minutinhos</span>
        </div>
      </div>

      <ShareButtons post={post} />
    </Header>
  );
}