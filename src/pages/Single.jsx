import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import './Single.css';
import { PostSingle, Newsletter } from '../components/';

export default function Single () {
  const { slug } = useParams();
  const [post, setPost] = useState([]);

  useEffect(() => {
    async function loadPost() {
      const reponse = await fetch(`https://blog.apiki.com/wp-json/wp/v2/posts?_embed&slug=${slug}`);
      
      if(!reponse.ok) {
        return;
      }

      const post = await reponse.json();
      setPost(post);
    }

    loadPost();
  }, [slug]);

  return (
    <>
      <div className="single">
        <main>
          {post.map( item => (
            <PostSingle 
              key={item.id} 
              img={item._embedded['wp:featuredmedia'][0].source_url}
              title={item.title.rendered} 
              author={item._embedded.author[0].name}
              authorAvatar={item._embedded.author[0].avatar_urls}
              date={item.date}
              content={item.content.rendered}
              slug={item.slug}
            />
          ))}
        </main>

        <aside className='single__sidebar'>
          <Newsletter />
        </aside>
      </div>
    </>
  )
}