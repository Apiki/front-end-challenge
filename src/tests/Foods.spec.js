import { fireEvent, waitFor } from '@testing-library/react';
import MutationObserver from '@sheerun/mutationobserver-shim';
import renderWithRouterAndBothContext from './helpers/renders';
import clearAndSetLsTests from './helpers/clearAndSetLSTests';
import servicesMocked from './mocks/servicesMocked';

window.MutationObserver = MutationObserver;
const BEEF_FILTER = 'Beef-category-filter';

describe('Testando pagina de Foods', () => {
  beforeEach(() => {
    clearAndSetLsTests();
    servicesMocked();
  });

  it('Testa filtros', async () => {
    const {
      getByTestId,
    } = renderWithRouterAndBothContext('/comidas');
    await waitFor(() => {
      const beefFilter = getByTestId(BEEF_FILTER);
      fireEvent.click(beefFilter);
      fireEvent.click(beefFilter);
      expect(beefFilter).toBeInTheDocument();
    });
  });
});
