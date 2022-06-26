import DeafultImg from '../Img/wordpress-screen.jpg';
import { Link } from 'react-router-dom';
import { format } from 'date-fns';
import ptBR from 'date-fns/locale/pt-BR';

function PostsLoadMore({ post }) {

	let postDate = format(new Date(post.date), 'dd/MM/yyyy', {
		locale: ptBR,
	})

	return (
		<>
			<div className="card-container">
				<div className="img-container">
					<Link to={`/${post.slug}`} target="_blank" rel="noreferrer" >
						<img src={post._embedded["wp:featuredmedia"] !== undefined ? post._embedded["wp:featuredmedia"][0].source_url : DeafultImg} alt="post media" />
					</Link>
				</div>
				<div className="format-container">
					<Link to={`/${post.slug}`} target="_blank" rel="noreferrer" >
						<p>{postDate}</p>
						<h1>{post.title.rendered}</h1>
						<br />
						<div dangerouslySetInnerHTML={{ __html: post.excerpt.rendered }} />
					</Link>
				</div>
			</div>
		</>
	)
}
export default PostsLoadMore;