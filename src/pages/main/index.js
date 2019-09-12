import React, {Component} from "react";
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
        this.loadPosts();
    }

    loadPosts = async (page = 1) => {
        const response = await api.get(`/posts?_embed&categories=518&page=${page}`);

        const {data, ...postInfo} = response;

        this.setState({posts: data, postInfo, page});
    };

    loadMore = () => {
        const { page, postInfo} = this.state;

        if (page === `x-wp-totalpages`) return;

        const pageNumber = page + 1;

        this.loadPosts(pageNumber);
    };

    render() {
        const { posts, page, postInfo } = this.state;

        return (
            <div className="post-list">
                {posts.map(post => (
                    <article key={post.id}>
                        <img src={post._embedded['wp:featuredmedia'][0].source_url}/>
                        <strong>{post.title.rendered}</strong>
                        <p>{post.excerpt.rendered}</p>

                        <Link to={`/posts/${post.slug}`}>Acessar</Link>
                    </article>
                ))}
                <div className="actions">
                    <button disabled={page === `x-wp-totalpages`} onClick={this.loadMore}>{this.state.page} - Carregar mais...</button>
                </div>
            </div>
        );
    }
}