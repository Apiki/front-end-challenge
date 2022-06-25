import {Link} from 'react-router-dom';
import { format } from 'date-fns';
import ptBR from 'date-fns/locale/pt-BR';


function PostPreview({ post }) {

	let postDate = format(new Date(post.date), 'dd/MM/yyyy', {
  		locale: ptBR,
  	})

	return(
		<>
			<div className="card-container">
				<div className="img-container">
					<Link to={`/${post.slug}`} target="_blank" rel="noreferrer" >
						<img src={post._embedded["wp:featuredmedia"][0].media_details.sizes["jnews-featured-750"].source_url} alt="post media"/>
					</Link>
				</div>
				<div className="format-container">
					<Link to={`/${post.slug}`} target="_blank" rel="noreferrer" >
						<p>{postDate}</p>
						<h1>{post.title.rendered}</h1>
						<br/>
						<div dangerouslySetInnerHTML={{__html: post.excerpt.rendered}}/>
					</Link>
				</div>
			</div>
		</>
	)
}
export default PostPreview;