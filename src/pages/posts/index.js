import React, { Component } from 'react';
import BlogApi from '../../services/api';
import {Link} from 'react-router-dom';
import  './_styles.scss';

export default class Posts extends Component {

  constructor(props) {
    super(props);
    this.state = { 
      posts: [],
      loading: true,
      page: 1,
      loadingPage: false,
      loadingPageEnd: 0
    };
  }

  componentDidMount() {
    this.loadPosts();
    window.addEventListener('scroll', this.onScroll, false);
  }
  
  componentWillUnmount() {
    window.removeEventListener('scroll', this.onScroll, false);
  }

  onScroll = async () => {
    if(this.state.loadingPage == true){
      return;
    }
    if (
      (window.innerHeight + window.scrollY) >= (document.body.offsetHeight - 500) && (this.state.page < parseInt(this.state.loadingPageEnd))
    ) {
      this.setState({loadingPage: true});
      let newPage = this.state.page + 1;
      const posts = await BlogApi.getPosts(newPage);
      this.setState({ page: newPage, loadingPage: false, posts: this.state.posts.concat(posts) });
    }
  }

  loadPosts = async () => {
    const posts = await BlogApi.getPosts(1);
    this.setState({ loadingPageEnd: BlogApi.getLastPage(), loading: false, posts: posts });
  };

  loading = () => {
    return(
      <div className="grid-100">
        <div className="loading">
          <img src="https://loading.io/spinners/double-ring/lg.double-ring-spinner.gif" />
        </div>
      </div>
    );
  }

  loadingPage = () => {
    return(
      <div className="grid-100">
        <div className="loading">
          <img src="https://loading.io/spinners/double-ring/index.double-ring-spinner.gif" />
        </div>
      </div>
    );
  }
  
  imprimiPost = (post) => {
    return(
        <div className="grid-33 tablet-grid-50 "  key={post.id}>
          <div className="card">
          
          <div className="card__fakeimg">
            <a href={`desenvolvimento/${post.link}`} title="">
              { <img src={post.image_post.source_url} alt=""  /> }
            </a>
          </div>
          <h2><a href={`desenvolvimento/${post.link}`}>{post.titulo}</a></h2>
          <ul className="card__info-post">
            <li><a href="" title="">{post.author }</a></li>
          </ul>
          <div className="card__content-post">
            <div dangerouslySetInnerHTML={{ __html: post.excerpt }} />
          </div>
          <Link className="card__more-tag" to={`desenvolvimento/${post.link}`}>Continuar lendo…</Link>
        </div>
      </div>
    );
  } 

  render() {
    const { posts } = this.state;
    console.log(this.state.posts);
    return (
      <div>
        {this.state.loading ? this.loading() : this.state.posts.map((post) => this.imprimiPost(post))}
        {this.state.loadingPage ? this.loadingPage() : null}
      </div>
    );
  }
}