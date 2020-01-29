import React, { useEffect, useState } from 'react';
import '../App.css';
import { useParams } from 'react-router-dom';
import NotFound from "./notFound";
import { ConvertDate } from "../helpers/date";

function Post() {
    let { slug } = useParams();

    const [loadingPage, setLoadingPage] = useState(true);
    const [post, setPost] = useState({});
    const [notFound, setNotFound] = useState(false);
    
    useEffect(() => {
        loadPost(slug);
    }, []);

    const loadPost = async (slug) => {

        const response = fetch("https://blog.apiki.com/wp-json/wp/v2/posts?_embed&slug=" + slug);
                                    
        response
            .then(res => {
                return res.json();
            })
            .then(data =>  {
                if (data.length == 0) {
                    setNotFound(true);

                    setLoadingPage(false);
                    return;
                }
                setPost(data[0]);
                setLoadingPage(false);
            });    

    }

    return (
        <div className="App">
            {loadingPage ? (
                <div className="loader" id="loader">
                    <div className="loader__spin">
                        <span></span>
                        <span></span>
                        <span></span>
                        <span></span>
                    </div>
                </div>
            ) : (
                <div className="post">
                    {notFound ? <NotFound /> : (
                        <div>
                            <img src={post._embedded["wp:featuredmedia"][0]["source_url"]} className="post__image"/>
                            <div className="post__title">
                                <h1>{post.title.rendered}</h1>
                            </div>

                            <div className="post__info">
                                <p>Autor: {post._embedded.author[0].name} | Criado em: {ConvertDate(post.date_gmt)}</p>
                            </div>

                            <div dangerouslySetInnerHTML={{ __html: post.content.rendered  }} className="post__content">
                            </div>
                        </div>                  
                    )}               
                </div>            
            )}
        </div>
    );
}

export default Post;
