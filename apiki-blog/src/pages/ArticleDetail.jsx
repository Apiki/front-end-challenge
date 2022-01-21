import React, { useState, useEffect } from 'react';
import services from '../services';
import { useParams } from 'react-router-dom';
import { 
	Container, 
	ContainerAuthor, 
	ContainerImage, 
	ContainerImageAuthor, 
	ContainerInfo, 
	Content, 
	Image, 
	ImageAuthor, 
	Name, 
	Title,
	Description } from '../styles/ArticleDetail';
import Header from '../containers/Header';


const ArticleDetail = () => {
	const [article, setArticle] = useState([]) 
	const params = useParams()

	useEffect(()=>{
		const getData = async () => {
			const article_data = await services.getArticle(params.slug)
			setArticle(article_data)
		}
		getData()
	}, [params.slug])

  return (
		<>
		{article.map((art) => 
			<>
				<Header />
				<Container key={art.id}>
						<ContainerImage>
								<Image 
									src={art._embedded['wp:featuredmedia'][0].source_url} 
									alt={art.alt_text}
								/>
						</ContainerImage>
						<Title>{art.title.rendered}</Title>
						<p><strong>Data de criação: {art.date}</strong></p>
						<Content dangerouslySetInnerHTML={{__html: art.content.rendered}}/>
				</Container>
				<ContainerAuthor>
					<ContainerImageAuthor>
						<ImageAuthor src={art._embedded.author[0].avatar_urls['96']}/>
					</ContainerImageAuthor>
					<ContainerInfo>
						<Name>{art._embedded.author[0].name}</Name>
						<Description>{art._embedded.author[0].description}</Description>
					</ContainerInfo>
				</ContainerAuthor>
				</>
			)}
			</>
    )
};

export default ArticleDetail;
