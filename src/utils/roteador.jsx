import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Inicio from '../pages/Home';
import Post from '../pages/Post';

export default function Roteador() {
  return (
    <Routes>
      <Route path="/" element={<Inicio />} />
      <Route path="/post/:slug" element={<Post />} />
    </Routes>
  );
}
