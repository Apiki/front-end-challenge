import React, { useState, useEffect } from 'react';
import {
    useParams
  } from "react-router-dom";
  import { singlePost } from '../../../services/single';

const Single = () => {
    const [post, setPost] = useState([]);
    const [loading, setLoading] = useState(true);
    
    let { slug } = useParams();

    const getPost = async () => {
        const { success, data } = await singlePost(slug);
        if(success) {
            setPost(data.data[0]);
            setLoading(false);
        }
    }

    useEffect(() => {
        getPost();
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    if(loading) return <div>Carregando...</div>
    return (
        <div>
            {post._embedded !== undefined && (
                <>
                    <img src={post._embedded['wp:featuredmedia'][0].source_url} alt="" />
                    <h1>{post.title.rendered}</h1>
                    <div dangerouslySetInnerHTML={{__html: post.content.rendered}} />
                </>
            )}
        </div>
    );
}

export default Single;