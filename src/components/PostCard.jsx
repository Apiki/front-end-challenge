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
    <div>
      <img src={ source } alt=""/>
      <h3>{title.rendered}</h3>
      <Link to={`/details/${slug}`}>Ver postagem</Link>
    </div>
  );
};

export default PostCard;
