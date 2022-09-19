import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import axios from 'axios'
import api from '../src/api';

import { BrowserRouter, Outlet, Route, Routes } from 'react-router-dom';
import Users from '../src/Users'
import Posts from '../src/Posts'
import NewPost from '../src/NewPost'


const UsersContainer = () => {
  return (
    <>
      <h1>Blog Empresa</h1>
      <Outlet />
    </>
  )
}

export default function App() {
  return (
    <div>
      <BrowserRouter>
        <button onClick={() => window.history.back()}>Voltar</button>

          <Routes>
            <Route path="users" element={<UsersContainer/>}>
              <Route index element={<Users/>}/>
              <Route path=":id/posts" element={<Posts/>}/>
              <Route path=":id/posts/new/:postId" element={<NewPost/>}/>
              <Route path=":id/posts/new" element={<NewPost/>}/>
            </Route>
          </Routes>
      </BrowserRouter>
    </div>
  )    
}

