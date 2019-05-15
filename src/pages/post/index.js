import React, {Component} from 'react';
import BlogApi from '../../services/api';
import  './_styles.scss';

export default class Post extends Component {

    constructor(props) {
        super(props);
        this.state = { 
          post: null,
          loading: true
        };
      }

      async componentDidMount() {
        const {slug} = this.props.match.params;
        const response = await BlogApi.getPost(slug);
        this.setState({ post: response, loading: false})
      }

    render() {
        const { post, loading } = this.state;
        if(loading)
        return(      
            <div className="loading">
                <img src="https://loading.io/spinners/double-ring/index.double-ring-spinner.gif" />
            </div>
            )
        else 
        return( 
            <div className="grid-100 grid-parent">
                <div className="content-post">
                
                { <img src={post.image_post.source_url} alt=""  /> }
                    <h1>{post.title}</h1>
                    { loading ? null :  <div   dangerouslySetInnerHTML={{ __html: post.html }} /> }
                </div>
                
            </div>
            );
    }
}