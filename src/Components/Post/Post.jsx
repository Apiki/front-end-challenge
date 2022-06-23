import './Post.css';
import axios from 'axios';
import {useState, useEffect} from 'react';
import {useParams} from 'react-router-dom';


function Post(){

	const [postContent, setPostContent] = useState([]);
	const { slug } = useParams();

	useEffect(()=>{
		axios.get(`https://blog.apiki.com/wp-json/wp/v2/posts?_embed&slug=${slug}`)
		.then(response =>  {
			setPostContent(response.data);
			console.log(response.data);
		})
		.catch(error => {
			console.error(error);
		})
	},[slug])

	return(
		<>
			{
				postContent.map(content => (
					<div className="post-container-c" key={content.id}>
						<div dangerouslySetInnerHTML={{__html: content.content.rendered}}/>
					</div>
				))
			}
		</>
	)
}

export default Post;