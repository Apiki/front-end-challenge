import { useEffect, useState } from 'react';
import PostCard from '../../components/PostCard';
import api from '../../services/api.jsx';
import './styles.css';


function Home() {

  const [posts, setPosts] = useState([]);

  useEffect(() => {
    async function loadAPI() {
      try {
        const response = await api.get(`/posts?_embed&categories=518`);

        if (response.status > 204) {
          return;
        };

        setPosts(posts.concat(...response.data));
        console.log(response.data);
      } catch (error) {
        console.log(error);
      }
    }
    loadAPI();
  }, []);
  
  // useEffect()
  console.log(posts)
  return (
    <main className='main-container'>
      <section className='post-container'>
        <div className='post-container-cards'>
          
          {posts?.map((post) => (
            <PostCard
              key={post.id}
              image={post._embedded['wp:featuredmedia'] && post._embedded['wp:featuredmedia'][0].source_url}
              date={post.date}
              title={post.title.rendered}
              content={post.yoast_head_json.description}
              slug={post.slug}
            />
          ))}

        </div>
        <div className='post-container-loading'>
          <button className='button-home'>Carregar mais...</button>
        </div>

      </section>
    </main>
  );
};

export default Home;