import { Link } from 'react-router-dom';
import parser from "html-react-parser"
import './style.scss';

export default function HomeCard(data) {
  const { slug, _embedded, title, excerpt } = data.data;
  return (
    <div className="posts-container">
      <Link to={'/'+ slug} rel="noreferrer" >
        <img 
          alt={slug && slug}
          width={750} 
          height={375} 
          src={_embedded && _embedded["wp:featuredmedia"] && _embedded["wp:featuredmedia"][0] && _embedded["wp:featuredmedia"][0].media_details && _embedded["wp:featuredmedia"][0].media_details.sizes && _embedded["wp:featuredmedia"][0].media_details.sizes["jnews-750x375"] && _embedded["wp:featuredmedia"][0].media_details.sizes["jnews-750x375"].source_url ? _embedded["wp:featuredmedia"][0].media_details.sizes["jnews-750x375"].source_url : "https://blog.apiki.com/wp-content/uploads/sites/2/2020/04/apiki-blog-institucional-blue-turquoise.png"}

        />
        <p className='title'>{title.rendered}</p>
        {parser(excerpt.rendered)}
      </Link>
    </div>
  )
}