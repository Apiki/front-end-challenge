import React, { Component } from "react";
import api from "../../services/api";
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

import './styles.css';

export default class Main extends Component{
    state = {
        posts: [],
        postInfo: {},
        page: 1,
    };
      
    componentDidMount() {
        this.loadPosts();
    }

    loadPosts = async () => {
        const response = await api.get(`/posts?_embed&categories=518`);

        const {data, ...postInfo} = response;

        this.setState({posts: data,
        postInfo,
        post: [],
        page: 1,
        totalPages: parseInt(response.headers['x-wp-totalpages']) 
        });
    };

    loadMore = async () => {
        if (this.state.page < this.state.totalPages) {
        const page = this.state.page + 1
        const response = await api.get(`posts?_embed&categories=518&page=${page}`)
        this.setState({
            posts: [...this.state.posts, ...response.data],
            page: page,
        })
        } else return;
    };

    render() {
        const { posts, page, postInfo, totalPages } = this.state;

        return (
            <div className="post-list">
                {posts.map(post => (
                    <article key={post.id}>
                        <img src={post._embedded['wp:featuredmedia'][0].source_url}/>
                        <br/>
                        <h1 className='' dangerouslySetInnerHTML={{__html: post.title.rendered}}></h1>
                        <p className='' dangerouslySetInnerHTML={{__html: post.excerpt.rendered}}></p>

                        <Link to={`/posts/${post.slug}`}>Acessar</Link>
                    </article>
                ))}
                <div className="actions">
                    <button disabled={page === totalPages} onClick={this.loadMore}>Carregar mais...</button>
                </div>
            </div>
        );
    }
}