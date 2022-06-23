// import Services from '../Services/Services';
import './Home.css';
import axios from 'axios';
import {useState,useEffect} from 'react';
//uuid para as keys únicas
import { v4 as uuidv4 } from 'uuid';
import PostPreview from '../PostPreview/PostPreview';
import PostsLoadMore from '../PostsLoadMore/PostsLoadMore';

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
			console.log(response.data);
			setNewPosts(response.data);
		})
		.catch(error => {
			console.error(error);
		})
	},[page])

	const handleCarregarMais = () => {
		let click = 1;

		if(page <= 17){
			setPage(page + click);
			console.log(page);
			setnewPostsArray([
				...newPostsArray,
				newPosts,
			]);
		}
		console.log(newPostsArray);
	}


	return(
		<>
			<div className="main-container">
				{
				  posts.map(post => (
				  	<PostPreview post={post} key={post.id}/>
				  ))
				}
				{
					newPostsArray.map(newPost => (
						<div className="post-container" key={uuidv4()}>
						{newPost.map(post => (
							<PostsLoadMore post={post} key={post.id}/>
						))}
						</div>
					))
				}		
				<button id="carregar-mais" onClick={(e) => handleCarregarMais(e)}>Carregar mais...</button>
			</div>
		</>
	)
}

export default Home;