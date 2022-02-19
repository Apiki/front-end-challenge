import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import useApi from '../../Api/ApikiApi'
import {Container} from './styled'
import parser from 'html-react-parser';

const Post = () => {

    let api = useApi();
    let {slug} = useParams();
    const [actualPost, setActualPost] = useState([]);

    function getContentPost(){
        if(actualPost.length !== 0){
            let content = parser(actualPost[0].content.rendered);
           return content;
        }
    }

    

    useEffect(() => {
        const getPost = async () => {
            const json = await api.getPost(slug);
            setActualPost(json);
        }
        getPost();
    }, [])

    
    return(
        actualPost.length !== 0 &&
        <Container>
            <div className='imgPost'>
                <img src={actualPost[0]._embedded["wp:featuredmedia"][0].media_details.sizes["full"].source_url}  alt="imagem"/>
            </div>
            <div className='titlePost'>
                <h1>{actualPost[0].title.rendered}</h1>
            </div>
            <div className="content">
                {getContentPost()}
            </div>
        </Container>
    );
};

export default Post;