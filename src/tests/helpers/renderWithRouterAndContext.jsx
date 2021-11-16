import React from 'react';
import { MemoryRouter, Route } from 'react-router-dom';
import { render } from '@testing-library/react';
import DataProvider from '../../context/DataProvider';
import Router from '../../routes/Router';

export default function renderWithRouterAndContext(route = '/') {
  let testLocation;
  return {
    ...render(
      <DataProvider>
        <MemoryRouter initialEntries={[route]}>
          <Router />
          <Route
            path="*"
            render={({ location }) => {
              testLocation = location;
              return null;
            }}
          />
        </MemoryRouter>
      </DataProvider>,
    ),
    pathname: () => testLocation.pathname,
  };
}
