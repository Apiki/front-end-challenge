import { useEffect, useRef, useState } from 'react';
import BoxPost from '../../Components/BoxPost';
import Header from '../../Components/Header/index'
import { getPostList } from '../../Services/Posts';
import './index.css'

function Initial() {
	const [categories, setCategories] = useState([]);
	const [TotalPages, setTotalPages] = useState();

	const pag = useRef(1);

	const getPosts = () => {
		getPostList(pag.current)
			.then(({ data, pages }) => {
				setTotalPages(pages)
				return data
			})
			.then((data) => {
				setCategories([...categories, ...data])
				pag.current++
			})
	}

	useEffect(() => {
		getPosts();
	}, []);

	return (
		<div>
			<header>
				<Header />
			</header>

			<section>
				{
					categories.map((item, index) =>
						<BoxPost
							key={index}
							title={item.title.rendered}
							slug={item.slug}
							img={item && item.yoast_head_json && item.yoast_head_json.og_image[0].url}
						/>
					)
				}
			</section>

			<div className="initial-box__button">
				<section className='initial-box__button-next'>
					<p className='initial-box__text-footer'>Exibindo {pag.current - 1} / {TotalPages}</p>
					<button onClick={getPosts} className="initial-box__text-button"> Ver mais </button>
				</section>
			</div>

		</div>
	);
}

export default Initial;
