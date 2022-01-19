/**
 * @author   : Matheus de Castro Sousa
 * @since    : React 17.0.2
 * Date      : 2022-01-19
 * Porpouse  : Page for posts detales
 * React usage : Hooks,fetch and useParams router-dom
 */

import './index.scss';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

export default function Detales() {

  const [slug, setSlug] = useState(null);
  const { name } = useParams();//get the Url attribute/parameter after the ":" two dots

  useEffect(() => {
    const apiUrl = `https://blog.apiki.com/wp-json/wp/v2/posts?_embed&slug=${name}`;
    const fetchItems = async () => {
      const data = await fetch(`${apiUrl}`);
      const items = await data.json();

      setSlug(items);

    }
    fetchItems();
  }, []);

  const renderDetale = () => {
    if (!slug) return (<li>Carregando programas...</li>);
    return (
      <>
        {slug.map(prog => (
          <li key={prog.title.rendered} className="detale-list__item" data-prog-id={prog.id.toString()} >
            <h1 className="detale-list__item__title">{prog.title.rendered}</h1>
            <img className="detale-list__item__img" src={`${prog._embedded['wp:featuredmedia'][0]['media_details'].sizes.full.source_url}`} alt="Logo" />
            <p className="detale-list__item__description">{prog.slug}</p>
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
    <div className="detale-list-container">
      <ul className="detale-list">
        {renderDetale()}
      </ul>
    </div>
  );
}

