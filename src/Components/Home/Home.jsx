// import Services from '../Services/Services';
import './Home.css';
import axios from 'axios';
import {useState,useEffect} from 'react';
//uuid para as keys únicas
import { v4 as uuidv4 } from 'uuid';
import ImgNotFound from '../NotFound/broken-1.png';

function Home(){

	const [posts, setPosts] = useState([]);
	const [page, setPage] = useState(2);
	const [newPosts, setNewPosts] = useState([]);
	const [newPostsArray, setnewPostsArray] = useState([]);

	useEffect(()=> {
		getPosts();
	},[])

	async function getPosts() {
		try {
			const response = await axios.get('https://blog.apiki.com/wp-json/wp/v2/posts?_embed&categories=518');
			console.log(response.data);
			setPosts(response.data);
		} catch (error) {
			console.error(error);
		}
	}

	useEffect(()=> {
		axios.get(`https://blog.apiki.com/wp-json/wp/v2/posts?_embed&categories=518&page=${page}`)
		.then(response => {
			// console.log(response.data);
			setNewPosts(response.data);
		})
		.catch(error => {
			console.error(error);
		})
	},[page])

	const handleCarregarMais = () => {
		let click = 1;
		setPage(page + click);
		setnewPostsArray([
			...newPostsArray,
			newPosts,
		]);
		console.log(newPostsArray);
	}

	return(
		<div className="main-container">	
			{
				posts.map(post => (
					<div className="posts-container" key={post.id}>
						<img width={post._embedded["wp:featuredmedia"][0].media_details.sizes["jnews-featured-750"].width} height={post._embedded["wp:featuredmedia"][0].media_details.sizes["jnews-featured-750"].height} src={post._embedded["wp:featuredmedia"][0].media_details.sizes["jnews-featured-750"].source_url} alt="post media"/>
						<br/>
						<h2>{post.title.rendered}</h2>
						<a href={post._embedded["wp:featuredmedia"][0].link}>link</a>
					</div>
				))
			}	
			{	
				newPostsArray.map(newPost => (
					<div className="posts-container" key={uuidv4()}>
						{newPost.map(post => (
							<div className="posts-content" key={post.id}>
								<img width={750} height={394} src={post['_embedded']["wp:featuredmedia"] !== undefined ? post._embedded["wp:featuredmedia"][0].source_url : ImgNotFound} alt="media post"/>
								<h2>{post.title.rendered}</h2>					
								<a href={post.link}>link</a>
							</div>
						))}
					</div>
				))	
			}
			<button id="carregar-mais" onClick={(e) => handleCarregarMais(e)}>Carregar mais...</button>
		</div>
	)
}

export default Home;