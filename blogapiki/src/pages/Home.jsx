import React from 'react';
import NavBar from '../components/NavBar';
import HomeScreen from '../components/HomeScreen';
import '../style/Home.css';
import Footer from '../components/Footer';
import AsideLinks from '../components/AsideLinks';

const Home = () => {
  return (
    <div>
      <NavBar />
      <div className="home">
        <div className="main">
          <HomeScreen />
        </div>
        <aside className="asideBar">
          <AsideLinks />
        </aside>
      </div>
        <Footer />
    </div>
  );
}

export default Home;
