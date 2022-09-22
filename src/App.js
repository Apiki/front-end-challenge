/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import './App.css';
import './styles/footer.css';
import './styles/header.css';
import './styles/menu.css';
import './styles/blogPostCard.css';
import './styles/home.css';
import './styles/sidebar.css';
import './styles/blogPostPage.css';
import './styles/searchbar.css';
import Helmet from 'react-helmet';
import Home from './pages/Home';
import PostPage from './pages/BlogPostPage';

function App() {
  return (
    <div className="App">
      <Helmet title="Blog APIKI | DEV" />

      <BrowserRouter>
        <Route exact path="/" component={Home} />
        <Route path="/:ship" render={(props) => <PostPage {...props} />} />
      </BrowserRouter>
    </div>
  );
}

export default App;
