import React, { Component } from 'react';
import '../style/loading.css';

class Loading extends Component {
  render() {
    return (
      <div className="loading-container">
        <div className="spinner-border" role="status">
          <span className="sr-only">Loading...</span>
        </div>
      </div>
    );
  }
}

export default Loading;
