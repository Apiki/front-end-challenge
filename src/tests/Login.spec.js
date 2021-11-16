import { fireEvent, waitFor } from '@testing-library/react';
import MutationObserver from '@sheerun/mutationobserver-shim';
import renderWithRouterAndBothContext from './helpers/renders';
import clearAndSetLsTests from './helpers/clearAndSetLSTests';
import servicesMocked from './mocks/servicesMocked';

window.MutationObserver = MutationObserver;
const EMAIL_INPUT = 'email-input';
const PASSWORD_INPUT = 'password-input';
const LOGIN_BUTTON = 'login-submit-btn';

describe('Testando pagina de Login', () => {
  beforeEach(() => {
    clearAndSetLsTests();
    servicesMocked();
  });

  it('Testa filtros', async () => {
    const {
      getByTestId,
      pathname,
    } = renderWithRouterAndBothContext('/');
    await waitFor(() => {
      const emailInput = getByTestId(EMAIL_INPUT);
      const passwordInput = getByTestId(PASSWORD_INPUT);
      fireEvent.change(emailInput, { target: { value: 'test@test.com' } });
      fireEvent.change(passwordInput, { target: { value: '123456789' } });
    });
    await waitFor(() => {
      const loginButton = getByTestId(LOGIN_BUTTON);
      fireEvent.click(loginButton);
    });
    expect(pathname()).toBe('/comidas');
  });
});
