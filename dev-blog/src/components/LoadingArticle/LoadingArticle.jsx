import { Component } from 'react';
import './LoadingArticle.css'

class LoadingArticle extends Component {
  render() {
    return (
      <div className="spacer">
        <div className="loader__article"></div>
      </div>
    )
  }
}

export default LoadingArticle;