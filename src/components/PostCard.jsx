import { Link } from 'react-router-dom';
const PostCard = (post) => {
  const { _embedded, title, slug } = post.post;
  let source = '';
  try {
    source = _embedded['wp:featuredmedia'][0].media_details.sizes.medium.source_url;
  } catch (error) {
    source = 'https://static.thenounproject.com/png/3594661-200.png';
  }
  return (
    <div className='card-container'>
      <img src={ source } alt='' className='card-img'/>
      <h3 className='card-title'>{title.rendered}</h3>
      <Link to={`/details/${slug}`} className='card-link'>Ver postagem</Link>
    </div>
  );
};

export default PostCard;
