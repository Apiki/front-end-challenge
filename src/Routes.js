import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from './Home';
import Page from './Page';

function AppRoutes(){
    return(
        <BrowserRouter>
              <Routes>
              <Route path="/" element={<Home />}/>
              <Route path="/page/:slug" element={<Page/>}/>
              <Route path="/page/" element={<Page/>}/>
              </Routes>
        </BrowserRouter>
    )
 }
 
export default AppRoutes;