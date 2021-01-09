import React from 'react';
import Main from '../components/Main';
import NavBar from '../components/NavBar'
import Footer from '../components/Footer';

const Home = () => {
  return (
    <div >
      <NavBar />
      <div className="container">
        <Main />
      </div>
      <Footer />
    </div>
  )
}

export default Home
