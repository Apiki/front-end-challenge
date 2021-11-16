import { fireEvent, waitFor } from '@testing-library/react';
import MutationObserver from '@sheerun/mutationobserver-shim';
import renderWithRouterAndBothContext from './helpers/renders';
import clearAndSetLsTests from './helpers/clearAndSetLSTests';
import servicesMocked from './mocks/servicesMocked';

window.MutationObserver = MutationObserver;
const SEARCH_TOP_BTN = 'search-top-btn';
const SEARCH_INPUT = 'search-input';
const NAME_SEARCH = 'name-search-radio';
const EXEC_SEARCH = 'exec-search-btn';

describe('Testando SearchBar em bebidas alert sem resultado', () => {
  beforeEach(() => {
    jest.spyOn(window, 'alert');
    clearAndSetLsTests();
    servicesMocked();
  });

  it('Busca por alert', async () => {
    const {
      getByTestId,
    } = renderWithRouterAndBothContext('/bebidas');
    await waitFor(() => {
      const searchTopButton = getByTestId(SEARCH_TOP_BTN);
      fireEvent.click(searchTopButton);
    });
    await waitFor(() => {
      const searchInput = getByTestId(SEARCH_INPUT);
      const nameRadio = getByTestId(NAME_SEARCH);
      fireEvent.change(searchInput, { target: { value: 'test no result' } });
      fireEvent.click(nameRadio);
    });
    await waitFor(() => {
      const execSearchButton = getByTestId(EXEC_SEARCH);
      fireEvent.click(execSearchButton);
    });
    await waitFor(() => {
      expect(window.alert).toHaveBeenCalled();
    });
  });
});

describe('Testando SearchBar em comidas alert sem resultado', () => {
  beforeEach(() => {
    clearAndSetLsTests();
    servicesMocked();
  });

  it('Busca por alert', async () => {
    jest.spyOn(window, 'alert');
    const {
      getByTestId,
    } = renderWithRouterAndBothContext('/comidas');
    await waitFor(() => {
      const searchTopButton = getByTestId(SEARCH_TOP_BTN);
      fireEvent.click(searchTopButton);
    });
    await waitFor(() => {
      const nameRadio = getByTestId(NAME_SEARCH);
      const searchInput = getByTestId(SEARCH_INPUT);
      fireEvent.change(searchInput, { target: { value: 'test no result' } });
      fireEvent.click(nameRadio);
    });
    await waitFor(() => {
      const execSearchButton = getByTestId(EXEC_SEARCH);
      fireEvent.click(execSearchButton);
    });
    await waitFor(() => {
      expect(window.alert).toHaveBeenCalled();
    });
  });
});
