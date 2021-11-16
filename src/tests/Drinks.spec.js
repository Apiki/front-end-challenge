import { fireEvent, waitFor } from '@testing-library/react';
import MutationObserver from '@sheerun/mutationobserver-shim';
import renderWithRouterAndBothContext from './helpers/renders';
import clearAndSetLsTests from './helpers/clearAndSetLSTests';
import servicesMocked from './mocks/servicesMocked';

window.MutationObserver = MutationObserver;
const ORDINARY_FILTER = 'Ordinary Drink-category-filter';

describe('Testando pagina de Drinks', () => {
  beforeEach(() => {
    clearAndSetLsTests();
    servicesMocked();
  });

  it('Testa filtros', async () => {
    const {
      getByTestId,
    } = renderWithRouterAndBothContext('/bebidas');
    await waitFor(() => {
      const ordinaryFilter = getByTestId(ORDINARY_FILTER);
      fireEvent.click(ordinaryFilter);
      fireEvent.click(ordinaryFilter);
      expect(ordinaryFilter).toBeInTheDocument();
    });
  });
});
