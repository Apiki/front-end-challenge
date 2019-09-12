import React, { Component } from "react";
import api from '../../services/api';

export default class Post extends Component {
    state = {
        post: {},
    };

    async componentDidMount() {
        const { slug } = this.props.match.params;

        const response = await api.get(`/posts?_embed&slug=${slug}`);
    
        this.setState({ post: response.data});
    }

    render() {

        const { post } = this.state;

        return (
            <div className="post_info">
                <h1>{post.title.rendered}</h1>
                <p>{post.excerpt.rendered}</p>


            </div>
        );
    }
}