import React, { Component } from 'react';
import axios from 'axios';
import { BrowserRouter as Router, Route, Link } from 'react-router';

export default class Content extends Component {
    constructor(props) {
        super(props);
        this.state = { post: [] };
    }

    componentWillMount = async () => {
        let objct = this;

        await axios.get('https://blog.apiki.com/wp-json/wp/v2/posts?_embed&slug=' + objct.props.id.match.params.id)
            .then(function (response) {
                objct.setState({ post: response.data })
            })
    }

    render() {
        return (
            <div>
                {
                    this.state.post.map((post) => {
                        return (
                            <div className='wrapper-container container'>
                                <article className='content-page'>
                                    <header className='the-content-reader'>
                                        <div className='header-page'>
                                            <div className='header-page-wrap'>
                                                <h1 className='title-primary' dangerouslySetInnerHTML={{ __html: post.title.rendered }}></h1>
                                                <div className='excerpt'>
                                                    <p className='' dangerouslySetInnerHTML={{ __html: post.excerpt.rendered }}></p>
                                                </div>
                                            </div>
                                            <div className='author-box'>
                                                <span>por</span>
                                                    <a dangerouslySetInnerHTML={{ __html: post._embedded['author'][0]['name']}}></a>
                                                    <time  datetime="2018-08-17" dangerouslySetInnerHTML={{ __html: post.date}}></time>

                                            </div>
                                        </div>
                                    </header>
                                    <div className='content-wrapper'>
                                        <div className='the-content'>
                                            <figure className='thumb'>
                                                <img className='thumb-img'  src={post._embedded['wp:featuredmedia'][0]['media_details']['sizes']['post-thumbnail']['source_url']} alt={post._embedded['wp:featuredmedia'][0]['media_details']['image_meta']['title']} alt=''/>
                                            </figure>
                                            <p className='' dangerouslySetInnerHTML={{ __html: post.content.rendered }}></p>
                                        </div>
                                        <div className='container-social'>
                                            <h1 className='title-primary'>Gostou então compartilhe</h1>
                                            <ul>
                                                <li><a href='#'><i class='fab fa-facebook-square' aria-hidden='true' /></a></li>
                                                <li><a href='#'><i class='fab fa-twitter' aria-hidden='true' /></a></li>
                                                <li><a href='#'><i class='fab fa-google-plus' aria-hidden='true' /></a></li>
                                                <li><a href='#'><i class='fab fa-linkedin' aria-hidden='true' /></a></li>
                                                <li><a href='#'><i class='fab fa-skype' aria-hidden='true' /></a></li>
                                                <li><a href='#'><i class='fab fa-instagram' aria-hidden='true' /></a></li>
                                                <li><a href='#'><i class='fab fa-youtube' aria-hidden='true' /></a></li>
                                                <li><a href='#'><i class='fab fa-pinterest-p' aria-hidden='true' /></a></li>
                                            </ul>
                                        </div>
                                    </div>
                                </article>
                            </div>
                        );
                    })
                }
            </div>
        )
    }
}

