import React, { Component } from 'react'
import Endpoint from '../../services/Endpoint'
import Preloader from '../../components/Preloader'

export default class PostDetails extends Component {
    state = {
        post: [],
        isLoaded: false
    }

    async componentDidMount() {
        const { slug } = this.props.match.params;
        const response = await Endpoint.get(`/posts?_embed&slug=${slug}`)
        console.log(response.data[0])
        this.setState({
            post: response.data[0],
            isLoaded: true
        })
    }

    render() {
        const { post, isLoaded } = this.state;

        if (!isLoaded) {
            return (
                <Preloader />
            )
        } else {
            const toHTML = (content) => {
                return { __html: content };
            }

            return (
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <div className="post">
                                <div className="title-post">
                                    <h1>{post.title.rendered}</h1>
                                </div>
                                <div className="description-post" dangerouslySetInnerHTML={toHTML(post.excerpt.rendered)} />
                                <div className="image-post">
                                    <img src={post._embedded['wp:featuredmedia'][0].source_url} alt={post.title.rendered} />
                                </div>
                                <div className="content-post" dangerouslySetInnerHTML={toHTML(post.content.rendered)} />
                                <hr />
                                <div className="author">
                                <div>
                                    <h3>Sobre o Autor</h3>
                                </div>
                                    <div className="about-author">
                                        <div className="image-author">
                                            <img src={post._embedded.author[0].avatar_urls["96"]} alt={post._embedded.author[0].name} />
                                        </div>
                                        <div className="info-author">
                                            <div className="name-author">
                                                <h4>{post._embedded.author[0].name}</h4>
                                            </div>
                                            <div className="description-author">
                                                <p>{post._embedded.author[0].description}</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            )

        }
    }
}
