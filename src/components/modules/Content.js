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
        lastPage: false,
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
        var {lastPage} = this.state;
        
        function classButton(){
            if (!lastPage) {
                return 'col btn d-flex justify-content-center align-items-center m-4';
            }else{
                return 'd-none';
            }
        }
            
        return(
        <div id="content">
            <div className="container">
                <div className="row">
                    {posts.map(post=>(
                        <Cards key={'card-geral'+post.id} post={post}  />
                    ))}
                    <button id="load-posts" type="button" className={classButton()} onClick={async () => {
                        let responseTwo = await GetPosts(url + '&page=' + page)
                        this.setState({page: page + 1})
                        if (this.state.page === this.state.totalPage) {
                            this.setState({lastPage: true})
                        }
                        this.setState({posts: posts.concat(responseTwo.data)}
                        ) 
                    } } ><i className="fas fa-search-plus mx-3"></i>Carregar próximos posts</button>
                </div>
            </div>
        </div>
    )}
}