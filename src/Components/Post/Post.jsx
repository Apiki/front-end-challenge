import './Post.css';
import axios from 'axios';
import {useState, useEffect} from 'react';



function Post(){

	const [postContent, setPostContent] = useState([]);

	useEffect(()=>{
		axios.get('https://blog.apiki.com/wp-json/wp/v2/posts?_embed&slug=wordpress-escolha-site-pequenas-empresas')
		.then(response =>  {
			setPostContent(response.data);
			console.log(response.data);
		})
		.catch(error => {
			console.error(error);
		})
	},[])

	function slug(){

	}

	return(
		// map.postContent(content => (
		<div className="post-container-c">

		</div>
		// ))
		)
}

export default Post;