import React, { Component } from 'react';
import Header from '../components/Header';
import CardList from '../components/CardList';
import Footer from '../components/Footer';

class Home extends Component {
  render() {
    return (
      <div>
        <Header />
        <CardList />
        <Footer />
      </div>
    )
  }
};

export default Home;
