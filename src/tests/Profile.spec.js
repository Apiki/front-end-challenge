import { fireEvent, waitFor } from '@testing-library/react';
import MutationObserver from '@sheerun/mutationobserver-shim';
import renderWithRouterAndBothContext from './helpers/renders';
import clearAndSetLsTests from './helpers/clearAndSetLSTests';
import servicesMocked from './mocks/servicesMocked';

window.MutationObserver = MutationObserver;
const DONE_BUTTON = 'profile-done-btn';
const FAVORITE_BUTTON = 'profile-favorite-btn';
const LOGOUT_BUTTON = 'profile-logout-btn';

describe('Testando pagina de Perfil', () => {
  beforeEach(() => {
    clearAndSetLsTests();
    servicesMocked();
  });

  it('Testa botão de receitas favoritas', async () => {
    const {
      getByTestId,
      pathname,
    } = renderWithRouterAndBothContext('/perfil');
    await waitFor(() => {
      const favoriteButton = getByTestId(FAVORITE_BUTTON);
      fireEvent.click(favoriteButton);
    });
    expect(pathname()).toBe('/receitas-favoritas');
  });

  it('Testa botão de receitas feitas', async () => {
    const {
      getByTestId,
      pathname,
    } = renderWithRouterAndBothContext('/perfil');
    await waitFor(() => {
      const doneButton = getByTestId(DONE_BUTTON);
      fireEvent.click(doneButton);
    });
    expect(pathname()).toBe('/receitas-feitas');
  });

  it('Testa botão de logout', async () => {
    const {
      getByTestId,
      pathname,
    } = renderWithRouterAndBothContext('/perfil');
    await waitFor(() => {
      const logoutButton = getByTestId(LOGOUT_BUTTON);
      fireEvent.click(logoutButton);
    });
    expect(pathname()).toBe('/');
  });
});
