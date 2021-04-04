import React, { Component } from 'react';
import '../style/author.css';

class Author extends Component {
  render() {
    const { name, avatar_urls, description } = this.props.author[0];
    let url;
    try {
      url = avatar_urls['96'];
    } catch {
      url = null;
    }

    return(
      <div className="author">
        <div>
          {url ? <img alt="" src={url} /> : <div />}
          <h6>{name}</h6>
        </div>
        <div className="author-text">
          <p>{description}</p>
        </div>
      </div>
    )
  }
};

export default Author;
