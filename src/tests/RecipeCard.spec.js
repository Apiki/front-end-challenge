import { waitFor } from '@testing-library/react';
import MutationObserver from '@sheerun/mutationobserver-shim';
import renderWithRouterAndBothContext from './helpers/renders';
import clearAndSetLsTests from './helpers/clearAndSetLSTests';
import servicesMocked from './mocks/servicesMocked';

window.MutationObserver = MutationObserver;
const FIRST_INGREDIENT_CARD = '0-ingredient-card';

describe('Testando pagina de RecipeExploreIngredients', () => {
  beforeEach(() => {
    clearAndSetLsTests();
    servicesMocked();
  });

  it('Verificando ingredientes em comidas', async () => {
    const {
      getByTestId,
    } = renderWithRouterAndBothContext('/explorar/comidas/ingredientes');
    await waitFor(() => {
      const ingredientCard = getByTestId(FIRST_INGREDIENT_CARD);
      expect(ingredientCard).toBeInTheDocument();
    });
  });

  it('Verificando ingredientes em bebidas', async () => {
    const {
      getByTestId,
    } = renderWithRouterAndBothContext('/explorar/bebidas/ingredientes');
    await waitFor(() => {
      const ingredientCard = getByTestId(FIRST_INGREDIENT_CARD);
      expect(ingredientCard).toBeInTheDocument();
    });
  });
});
