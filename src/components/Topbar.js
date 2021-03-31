import React, { Component } from 'react';

class Topbar extends Component {
  render() {
    return(
      <nav className="navbar sticky-top navbar-expand-sm navbar-dark" style={{backgroundColor: '#d07400'}}>
        <a href="/" className="navbar-brand mb-0 h1">Apiki</a>
      </nav>
    )
  }
};

export default Topbar;
