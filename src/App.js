import React from 'react';
import Header from './components/Header';
import Content from './components/Content';
import Sidebar from './components/SideBar';
import Footer from './components/Footer';
import Posts from './pages/posts';
import Routes from './routes';



const App = () => (
    <div className="App">
      <Header />
     
      <div className="grid-container">
     
          <Routes />
        </div>
        <Footer />
      </div>
     

);

export default App;
