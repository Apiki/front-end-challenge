import React, { Component } from "react";
import GetPosts from '../functions/GetPosts';
import Cards from './Cards';

export default class Content extends Component {
    state = {
        posts: [],
        url: '/posts?_embed&categories=518',
        page: 2,
        totalPage: 0,
        totalPost: 0,
    }
   async componentDidMount(){
       let response = await GetPosts(this.state.url)
       this.setState({posts:  response.data})
       this.setState({totalPage:  response.headers['x-wp-totalpages']})
       this.setState({totalPost:  response.headers['x-wp-total']})
   }
    render(){
        var {posts} = this.state;
        var {url} = this.state;
        var {page} = this.state;
        var {totalPage} = this.state;
        // var {totalPost} = this.state;
        return(
        <div id="content">
            <div className="container">
                <div className="row">
                    {posts.map(post=>(
                        <Cards key={'card-geral'+post.id} post={post}  />
                    ))}
                    <div className="col d-flex justify-content-center align-items-center">
                        <button type="button" className="btn btn-outline-primary m-4" onClick={async () => {
                            let responseTwo = await GetPosts(url + '&page=' + page)
                            if (page <= totalPage) {
                                this.setState({page: page + 1})
                            }
                            this.setState({posts: posts.concat(responseTwo.data)}) 
                        } } >Carregar próximos posts</button>
                    </div>
                </div>
            </div>
        </div>
    )}
}