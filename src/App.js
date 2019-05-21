import React, { Component } from 'react'
import Routes from './routes'
import Nav from './components/Nav'
import Footer from './components/Footer'

class App extends Component {

  render() {
    return (
      <div>
        <Nav />
        <div id="wrapper">
          <Routes />
        </div>
        <Footer />
      </div>
    );
  }
}

export default App