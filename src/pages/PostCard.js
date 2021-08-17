import React from 'react';
import postDetailsFetch from '../services/detailsAPI';
import Header from '../components/Header';
import Footer from '../components/Footer';
import moment from 'moment';

class PostCard extends React.Component {
  constructor() {
    super()

    this.state = {
      data: {
      }
    };
    
    this.formatDate = this.formatDate.bind(this);
  }

  
  componentDidMount() {
    const {slug} = this.props.match.params;
    const url = `https://blog.apiki.com/wp-json/wp/v2/posts?_embed&slug=${slug}`;
    postDetailsFetch(url).then(result => this.setState({
      data: {
        postDetails: result[0],
      }
    }))
  }

  formatDate(date) {
    return moment(date).locale('pt-br').format('L');
  }

  render() {
    const { postDetails } = this.state.data;
    // const postDetails = postDetailsFetch(url).then((result) => result[0]);
    if (!postDetails) return <div>LOADING...</div>
    const {
      _embedded,
      title,
      content,
      date,
    } = postDetails;
    const imgPath = _embedded["wp:featuredmedia"][0].source_url;
    const formattedDate = this.formatDate(date);
    return (
      <div>
        <Header />
        <div className="main-body-post">
          <div className="post-wrapper">
            <img src={imgPath} alt="title.rendered" />
            <div className="post-title">
              <h1>{title.rendered}</h1>
              <p>Por <strong>{_embedded.author[0].name}</strong> em {formattedDate}</p>
            </div>
              <div className="post-body" dangerouslySetInnerHTML={{__html: content.rendered}} />
          </div>
        </div>
        <Footer />
      </div>
    )
  }
}

export default PostCard;
