import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import Post from './components/Post';


ReactDOM.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/:slug" element={<Post />} />
    </Routes>
  </BrowserRouter>,
    
  document.getElementById('root')
);