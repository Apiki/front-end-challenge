/* eslint-disable react/no-danger */
/* eslint-disable no-underscore-dangle */
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Api from '../../services/api';
import './styles.css';

export default class Details extends Component {
  constructor(props) {
    super(props);
    this.state = {
      postData: [],
    };
  }

  async componentDidMount() {
    const { slug } = this.props.match.params;
    const response = await Api.get(`https://blog.apiki.com/wp-json/wp/v2/posts?_embed&slug=${slug}`);
    this.setState({ postData: response.data });
  }

  render() {
    const { postData } = this.state;

    if (postData['0']) {
      const date = new Date(postData['0'].date.toString());
      const avatar = postData['0']._embedded.author['0'].avatar_urls['48'];
      const brief = postData['0'].excerpt.rendered;
      const title = postData['0'].title.rendered;
      const authorName = postData['0']._embedded.author['0'].name;
      return (
        <div className="container">
          <h1 className="title" dangerouslySetInnerHTML={{ __html: title }} />
          <div className="detailsPage">
            <div className="detailsPage__brief" dangerouslySetInnerHTML={{ __html: brief }} />
            <div className="authorCard">
              <img alt="foto do autor" src={avatar} />
              <div className="authorCard__info">
                <p>{authorName}</p>
                <p className="authorCard__info__date">{date.toLocaleDateString()}</p>
              </div>
            </div>
            <picture className="detailsPage">
              <img className="detailsPage__featureMedia" alt={postData['0']._embedded['wp:featuredmedia']['0'].alt_text} src={postData['0']._embedded['wp:featuredmedia']['0'].source_url} />
            </picture>
            <div className="detailsPage__content" dangerouslySetInnerHTML={{ __html: postData['0'].content.rendered }} />
          </div>
        </div>
      );
    }
    return true;
  }
}
Details.propTypes = {
  slug: PropTypes.string.isRequired,
  match: PropTypes.string.isRequired,
};
