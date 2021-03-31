import React, { Component } from 'react';
class Author extends Component {
  render() {
    const { name, avatar_urls, description } = this.props.author[0];
    return(
      <div className="container">
      <div className="card mb-3 border-0">
        <div className="row no-gutters">
          <div className="col-md-1">
            <img className="card-img" alt="" src={avatar_urls.['96']} />
          </div>
          <div className="col-md-8">
            <div className="card-body">
              <h6 className="h6">{name}</h6>
              <p className="small">{description}</p>
            </div>
          </div>
        </div>
        </div>

      </div>
    )
  }
};

export default Author;
