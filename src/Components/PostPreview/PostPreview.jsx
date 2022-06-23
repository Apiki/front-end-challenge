import {Link} from 'react-router-dom';

function PostPreview({ post }) {

	return(
		<>
			<div className="card-container">
				<img src={post._embedded["wp:featuredmedia"][0].media_details.sizes["jnews-featured-750"].source_url} alt="post media"/>
				<br/>
				<div className="format-container">
					<h1>{post.title.rendered}</h1>
					<p>{post.excerpt.rendered.includes('<p>') ? 
					post.excerpt.rendered.replace('<p>','').replace('</p>','') : post.excerpt.rendered}</p>
				</div>
				<br/>
				<Link to={'/' + post.slug} target="_blank" rel="noreferrer" ><h4>Leia mais</h4></Link>
				<br/>
			</div>
		</>
	)
}
export default PostPreview;