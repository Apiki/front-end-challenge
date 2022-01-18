import './index.scss';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import PostsList from '../../components/list_posts/postsList';

export default function Detales() {
    
    const [slug, setSlug] = useState(null);
    const { name } = useParams();

    useEffect(() => {
        const apiUrl = `https://blog.apiki.com/wp-json/wp/v2/posts?_embed&slug=${name}`;
        const fetchItems = async () => {
            const data = await fetch(`${apiUrl}`);
            const items = await data.json();

            // items.forEach(element => {
            //     if(element!==null){
                setSlug(items);
                
                //     }
                // });
        }
        fetchItems();
    }, []);

    const renderPosts = () => {
        if (!slug) return (<li>Carregando programas...</li>);
        return (
          <>
            {slug.map(prog => (
              <li key={prog.title.rendered} className="posts-list__item" data-prog-id={prog.id.toString()} >
                <h1 className="posts-list__item__title">{prog.title.rendered}</h1>
                <img className="posts-list__item__img" src={`${prog._embedded['wp:featuredmedia'][0]['media_details'].sizes.full.source_url}`} alt="Logo" />
                <p className="posts-list__item__description">{prog.slug}</p>
                <a href={`${prog.link}`} >
                  <button type="button">
                    Detalhes do Post
                  </button></a>
              </li>
            ))}
          </>
        );
      }
    
      return (
        <div className="posts-list-container">
          <ul className="posts-list">
            {renderPosts()}
          </ul>
        </div>
      );
}

