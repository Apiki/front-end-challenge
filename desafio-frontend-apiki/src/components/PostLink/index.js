import React from 'react';
import { PostLink } from './styled';
import { Link } from 'react-router-dom';

const Post = (props) => {

    return(
        <PostLink>
            <div className="post--img">
                <img src={props.json._embedded["wp:featuredmedia"][0].media_details.sizes['jnews-360x180'].source_url} alt="imagem"/>
            </div>
            <div className="post--title"><h3>{props.json.title.rendered}</h3></div>
            <Link className="post--link" to={`&slug=${props.json.slug}`}>
                <div>Ver publicação</div>
            </Link>
        </PostLink> 
    );
}

export default Post;