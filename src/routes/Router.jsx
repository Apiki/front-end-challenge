import React from 'react';
import { Route, Routes } from 'react-router-dom';
import LandingPage from '../pages/LandingPage';
import NotFound from '../pages/NotFound';
import PostPage from '../pages/PostPage';

const Router = () => (
  <Routes>
    <Route
      exact
      path="/"
      element={<LandingPage />}
    />
    <Route
      path="/artigo/:slug"
      element={<PostPage />}
    />
    <Route
      path="*"
      element={<NotFound />}
    />
  </Routes>
);

export default Router;
