import React from 'react';
import { Route, Routes } from 'react-router-dom';
import LandingPage from '../pages/LandingPage';
import NotFound from '../pages/NotFound';

const Router = () => (
  <Routes>
    <Route
      exact
      path="/"
      element={<LandingPage />}
    />
    <Route
      path="/registro"
      element={<NotFound />}
    />
  </Routes>
);

export default Router;
