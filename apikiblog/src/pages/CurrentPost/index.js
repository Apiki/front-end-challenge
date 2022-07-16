import './style.css';
import { useParams } from 'react-router-dom';
import Header from '../../components/Header';
import { useState, useEffect } from 'react';
import axios from 'axios';
import parse from 'html-react-parser';
import Footer from '../../components/Footer';

function Post () {
    const { slug } = useParams();

    console.log(slug)

    const [img, setImg] = useState('');
    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');


    async function currentPost () {
        try {

            const response = await axios.get(`https://blog.apiki.com/wp-json/wp/v2/posts?_embed&slug=${slug}`, { timeout: 10000 });
            
            const { data } = response;

            setImg(data[0]._embedded["wp:featuredmedia"][0].source_url)
            setTitle(data[0].title["rendered"])
            setContent(data[0].content["rendered"])
      
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(()=> {
        currentPost();
    },[])

    return (
        <div className="currentPost">
            <Header/>
            <div className="currentPost-card">
                <h1>{title}</h1>
                <img src={img} alt="img-post"/> 
                <div className="currentPost-card__content">{parse(content)}</div> 
            </div>
            <Footer/>
        </div>
    )
}

export default Post;