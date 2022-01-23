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
	Description, 
	ContainerDate} from '../styles/ArticleDetail';
import Header from '../containers/Header';
import Date from '../components/Date';
import CommentList from '../containers/CommentList';

const ArticleDetail = () => {
	const [article, setArticle] = useState({
		id: 0,
		img_src: '',
		img_alt: '',
		title: '',
		created_at: '',
		modified_at: '',
		content: '',
		author_avatar: '',
		author_name: '',
		author_description: ''
	})

	const params = useParams()

	useEffect(()=>{
		const getData = async () => {
			const article_data = await services.getArticle(params.slug)
			setArticle({
				id: article_data[0].id,
				img_src: article_data[0]._embedded['wp:featuredmedia']?.length
					&& article_data[0]._embedded['wp:featuredmedia'][0].source_url,
				img_alt: article_data[0].alt_text,
				title: article_data[0].title.rendered,
				created_at: article_data[0].date,
				modified_at: article_data[0].modified,
				content: article_data[0].content.rendered,
				author_avatar: article_data[0]._embedded.author?.length
					&& article_data[0]._embedded.author[0].avatar_urls['96'],
				author_name: article_data[0]._embedded.author?.length
					&& article_data[0]._embedded.author[0].name,
				author_description: article_data[0]._embedded.author?.length
					&& article_data[0]._embedded.author[0].description
			})
		}
		getData()
	}, [params])

  return (
			<>
				<Header />
				<Container key={article.id}>
          <ContainerImage>
              <Image 
                src={article.img_src} 
                alt={article.img_alt}
              />
          </ ContainerImage>
          <Title>{article.title}</Title>
					<ContainerDate>
						<Date 
						text='Criado em:' 
						date={article.created_at}
					/>
					<Date 
						text='Modificado em:' 
						date={article.modified_at}
					/>
					</ContainerDate>
							
					<Content dangerouslySetInnerHTML={{__html: article.content}}/>
				</Container>
				<ContainerAuthor>
					<h2>Autor</h2>
					<div>
						<ContainerImageAuthor>
							<ImageAuthor src={article.author_avatar}/>
						</ContainerImageAuthor>
						<ContainerInfo>
							<Name>{article.author_name}</Name>
							<Description>{article.author_description}</Description>
						</ContainerInfo>
					</div>
				</ContainerAuthor>
				{article.id !== 0 && <CommentList post={article.id}/>}
			</>
    )
};

export default ArticleDetail;
