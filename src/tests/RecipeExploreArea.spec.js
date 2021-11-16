import { fireEvent, waitFor } from '@testing-library/react';
import MutationObserver from '@sheerun/mutationobserver-shim';
import renderWithRouterAndBothContext from './helpers/renders';
import clearAndSetLsTests from './helpers/clearAndSetLSTests';
import servicesMocked from './mocks/servicesMocked';

window.MutationObserver = MutationObserver;
const EXPLORE_AREA = 'explore-by-area-dropdown';

describe('Testando pagina de RecipeExploreArea', () => {
  beforeEach(() => {
    clearAndSetLsTests();
    servicesMocked();
  });

  it('Verificando dropdow de areas', async () => {
    const {
      getByTestId,
    } = renderWithRouterAndBothContext('/explorar/comidas/area');
    await waitFor(() => {
      const exploreArea = getByTestId(EXPLORE_AREA);
      fireEvent.change(exploreArea, { target: { value: 'American' } });
      fireEvent.change(exploreArea, { target: { value: 'All' } });
      expect(exploreArea).toBeInTheDocument();
    });
  });
});
