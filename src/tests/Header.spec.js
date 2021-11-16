import { fireEvent, waitFor } from '@testing-library/react';
import MutationObserver from '@sheerun/mutationobserver-shim';
import renderWithRouterAndBothContext from './helpers/renders';
import clearAndSetLsTests from './helpers/clearAndSetLSTests';
import servicesMocked from './mocks/servicesMocked';

window.MutationObserver = MutationObserver;
const PROFILE_TOP_BTN = 'profile-top-btn';
const SEARCH_TOP_BTN = 'search-top-btn';
const SEARCH_INPUT = 'search-input';
const PAGE_TITLE = 'page-title';

describe('Testando Links do Header', () => {
  beforeEach(() => {
    clearAndSetLsTests();
    servicesMocked();
  });

  it('Testando link para perfil', () => {
    const {
      getByTestId,
      pathname,
    } = renderWithRouterAndBothContext('/receitas-feitas');
    const profileButton = getByTestId(PROFILE_TOP_BTN);
    expect(profileButton).toBeInTheDocument();
    fireEvent.click(profileButton);
    expect(pathname()).toBe('/perfil');
  });

  it('Testando botão para search bar', async () => {
    const {
      getByTestId,
    } = renderWithRouterAndBothContext('/comidas');
    await waitFor(() => {
      const searchButton = getByTestId(SEARCH_TOP_BTN);
      expect(searchButton).toBeInTheDocument();
      fireEvent.click(searchButton);
    });
    const searchInput = getByTestId(SEARCH_INPUT);
    expect(searchInput).toBeInTheDocument();
  });
});

describe('Testando títulos do Header', () => {
  beforeEach(() => {
    clearAndSetLsTests();
    servicesMocked();
  });

  it('Testando título Bebidas', async () => {
    const {
      getByTestId,
    } = renderWithRouterAndBothContext('/bebidas');
    await waitFor(() => {
      const title = getByTestId(PAGE_TITLE);
      expect(title).toHaveTextContent(/bebidas/i);
    });
  });

  it('Testando título Explorar', async () => {
    const {
      getByTestId,
    } = renderWithRouterAndBothContext('/explorar');
    await waitFor(() => {
      const title = getByTestId(PAGE_TITLE);
      expect(title).toHaveTextContent(/explorar/i);
    });
  });

  it('Testando título Receitas Favoritas', async () => {
    const {
      getByTestId,
    } = renderWithRouterAndBothContext('/receitas-favoritas');
    await waitFor(() => {
      const title = getByTestId(PAGE_TITLE);
      expect(title).toHaveTextContent(/receitas favoritas/i);
    });
  });
});
