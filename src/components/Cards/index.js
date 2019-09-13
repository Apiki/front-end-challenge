import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom';

const Card = ({posts}) => {
    return (
        {posts.map(post => (
            <div className="col-sm6 col-md-4 col-lg-3 col-lx-3 cadr-box" key={post.id}>
                <div className="img-post">
                    <img src={post._embedded['wp:featuredmedia'][0].source_url}/>
                </div>
                <br/>
                <strong className='' dangerouslySetInnerHTML={{__html: post.title.rendered}}></strong>
                <p className='' dangerouslySetInnerHTML={{__html: post.excerpt.rendered}}></p>

                <Link to={`/posts/${post.slug}`}>Acessar</Link>
            </div>
        ))}
    );
}

export default Card;