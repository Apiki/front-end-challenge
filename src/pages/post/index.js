import React, { Component } from 'react';
import api from '../../services/api';
import styles from './styles.css'

export default class Post extends Component {
    state = {
        post: {},
    };

    async componentDidMount() {
        const { slug } = this.props.match.params;
        const response = await api.get(`/posts?_embed&slug=${slug}`);
        let post = response.data[0];
        console.log(post);
    }

    render() {

        const { post } = this.state;

        return (
            <div className="post-info">
                <h1>{post.id}</h1>
                <h2>{post.slug}</h2>
                                
            </div>
        );
        }
}