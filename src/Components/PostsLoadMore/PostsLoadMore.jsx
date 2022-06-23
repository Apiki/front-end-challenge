import {Link} from 'react-router-dom';
import ImgNotFound from '../NotFound/broken-1.png';

function PostsLoadMore({ post }) {

	return(
		<>
			<div className="card-container">
				<img src={post['_embedded']["wp:featuredmedia"] !== undefined ? post._embedded["wp:featuredmedia"][0].source_url : ImgNotFound} alt="post media"/>
				<div className="format-container">
					<h1>{post.title.rendered}</h1>
					<div dangerouslySetInnerHTML={{__html: post.excerpt.rendered}}/>
				</div>
				<br/>
				<Link to={`/${post.slug}`} target="_blank" rel="noreferrer" ><h4>Leia mais</h4></Link>
				<br/>
			</div>	
		</>
	)
}
export default PostsLoadMore;