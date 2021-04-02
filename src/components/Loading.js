import React, { Component } from 'react';
import '../style/loading.css';

class Loading extends Component {
  render() {
    return (
      <div className="loading-container">
        <div>
          <span>Loading...</span>
        </div>
      </div>
    );
  }
}

export default Loading;
