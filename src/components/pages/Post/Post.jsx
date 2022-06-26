import './Post.css';
import axios from 'axios';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { format } from 'date-fns';
import ptBR from 'date-fns/locale/pt-BR';
import Avatar from '../../Img/avatar.png';

function Post() {


	const [postContent, setPostContent] = useState([]);
	const { slug } = useParams();

	useEffect(() => {
		axios.get(`https://blog.apiki.com/wp-json/wp/v2/posts?_embed&slug=${slug}`)
			.then(response => {
				setPostContent(response.data);
				console.log(response.data);
			})
			.catch(error => {
				console.error(error);
			})
	}, [slug])

	return (
		<>
			{
				postContent.map(contents => (
					<div className="post-container-c" key={contents.id}>
						<h1>{contents.title.rendered}</h1>
						<br />
						<div className="container-post-info">
							<div style={{ display: 'flex', alignItems: 'center' }}>
								<img src={contents._embedded.author[0].avatar_urls !== undefined ? contents._embedded.author[0].avatar_urls[24] : Avatar} alt="avatar do autor" />
								<p><small>{contents._embedded.author[0].name}</small></p>
							</div>
							&nbsp;<div className="black-square"><small>&#9642;</small></div> &nbsp;
							<p><small>{format(new Date(contents.date), "EEEE', 'd' de 'MMMM' de 'yyyy'", { locale: ptBR, })}</small></p>
							&nbsp;<div className="black-square"><small>&#9642;</small></div> &nbsp;
							<p><small>Tempo de leitura: {contents.yoast_head_json.twitter_misc["Est. tempo de leitura"]}</small></p>
						</div>
						<br />
						<div className="article" dangerouslySetInnerHTML={{ __html: contents.content.rendered }} />
					</div>
				))
			}
		</>
	)
}

export default Post;