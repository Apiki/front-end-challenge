import React, { Component } from 'react';
import returnUrl from '../services/functions.js';

class Author extends Component {
  render() {
    const { name, avatar_urls, description } = this.props.author[0];
    const url = returnUrl(avatar_urls['96']);

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
