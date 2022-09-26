import { useEffect, useState } from 'react';
import { useParams } from "react-router-dom";
import HTMLReactParser from 'html-react-parser';
import Header from '../../Components/Header'
import './index.css'
import { getPostBySlug } from '../../Services/Posts';
import BoxPost from '../../Components/BoxPost';
function Post() {
	const [post, setPost] = useState();
	const { slug } = useParams();


	const getPost = () => {
		getPostBySlug(slug)
		.then((data)=>{
			setPost(data && data[0])
		})
	}

	useEffect(() => {
		getPost();
	}, []);

  return (
	<div>
		<header>
			<Header/>
		</header>
		
		<div>
			{
			post &&
			<BoxPost 
			title={post.title.rendered}
			img={post.yoast_head_json.og_image[0].url}
			/>
			}
			
		</div>


		 <div className="postBoxContentParagraph">
			{post &&(<p> {HTMLReactParser(post.content.rendered)} 
			</p>)}
		</div> 

	</div>
  );
}

export default Post;
