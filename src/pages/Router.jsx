import React from 'react'
import { BrowserRouter } from 'react-router-dom';
import { Route, Routes } from 'react-router';

import Home from "./Home"
import PostContent from "./PostContent"

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/post/*" element={<PostContent />} />
      </Routes>
    </BrowserRouter>
  )
}

export default Router;