import React, { Component } from 'react';
import Topbar from '../components/Topbar';
import CardList from '../components/CardList';

class Home extends Component {
  render() {
    return (
      <div>
        <Topbar />
        <CardList />
      </div>
    )
  }
};

export default Home;
