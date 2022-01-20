import React from 'react';
import './template/css/index.css';

import './node_modules/bootstrap/dist/css/bootstrap.min.css';
import './node_modules/bootstrap/dist/js/bootstrap.min.js';
import './node_modules/@fortawesome/fontawesome-free/css/all.min.css';

import Header from './components/Header';
import Body from './components/Body';

function App() {
  return (
    <div className="App">
        <Header />
        <Body />
    </div>
  );
}

export default App;
