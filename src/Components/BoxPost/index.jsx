import { Link } from 'react-router-dom';
import './index.css';

function BoxPost({ title, slug, img }) {

	return (
		<div className="box-post">

			<div>
				<h1 className="box-post__title"> {title} </h1>

				<br />

				<Link target={'_blank'} to={`post/${slug}`} className="box-post__title-link">
					<img src={img} alt='imagems' className='box-post__image' />
				</Link>
				<br />

			</div>

		</div>
	)
}

export default BoxPost;
