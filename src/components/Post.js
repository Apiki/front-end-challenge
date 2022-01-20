import React, { Component } from "react";
import GetPosts from './functions/GetPosts';
import Header from "./Header";

export default class Post extends Component {
    state = {
        post: [],
        url: '/posts?_embed&slug='+window.location.pathname.substring(1),
    }
    async componentDidMount(){
       const response = await GetPosts(this.state.url);
       this.setState({post: [response.data[0]]})
    }
    render(){
        var {post} = this.state;
        return(
        <div>
            <Header />
            <div id="content-post">
                <div className="container">
                    <div className="row">
                            {post.map(pt=>(
                        <div key={'container-'+pt.id} className="container">
                            <div className="post-title my-4 d-flex justify-content-center mb-3" >
                                <h1>{pt.title.rendered}</h1>
                            </div>
                            <div className="author-post mt-3 d-flex justify-content-end" >
                                Por: {pt._embedded.author[0].name}
                            </div>
                            <div className="post-image my-4" >
                                <img src={pt._embedded['wp:featuredmedia'][0].source_url} className="pt-3 px-2 img-fluid rounded-start" alt={pt.title.rendered} />
                            </div>
                            <div className="description my-3 p-3" dangerouslySetInnerHTML={{ __html: pt.content.rendered }}></div>
                            
                        </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )}
}
