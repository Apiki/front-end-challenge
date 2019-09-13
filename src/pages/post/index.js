import React, { Component } from "react";
import api from "../../services/api";
import { Link } from 'react-router-dom';

import './styles.css';

export default class Main extends Component{
    state = {
        posts: [],
        postInfo: {},
        page: 1,
    };
      
    componentDidMount() {
        this.loadPost();
    }

    loadPost = async () => {
        const {slug} = this.props.match.params;

        const response = await api.get(`/posts?_embed&slug=${slug}`);

        const {data, ...postInfo} = response;

        this.setState({posts: data,
        postInfo,
        post: [],
        page: 1,
        totalPages: parseInt(response.headers['x-wp-totalpages']) 
        });
    };

    render() {
        const { posts, page, postInfo, totalPages } = this.state;

        return (
            <div className="post-info">
                
                {posts.map(post => (
                    <article key={post.slug}>
                        <h1 className='' dangerouslySetInnerHTML={{__html: post.title.rendered}}></h1><br/>
                        <img src={post._embedded['wp:featuredmedia'][0].source_url}/><br/>
                        <p className='' dangerouslySetInnerHTML={{__html: post.content.rendered}}></p>
                    </article>
                ))}

            </div>
        );
    }
}