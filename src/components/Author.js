import React, { Component } from 'react';

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
      <div>
        {url ? <img alt="" src={url} /> : <div />}
        <div>
          <h6>{name}</h6>
          <p>{description}</p>
        </div>
      </div>
    )
  }
};

export default Author;
