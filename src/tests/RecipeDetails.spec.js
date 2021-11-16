import { waitFor } from '@testing-library/react';
import MutationObserver from '@sheerun/mutationobserver-shim';
import renderWithRouterAndBothContext from './helpers/renders';
import clearAndSetLsTests from './helpers/clearAndSetLSTests';
import servicesMocked from './mocks/servicesMocked';

window.MutationObserver = MutationObserver;
const RECIPE_TITLE = 'recipe-title';

describe('Testando RecipeDetails', () => {
  beforeEach(() => {
    clearAndSetLsTests();
    servicesMocked();
    localStorage.setItem(
      'recipeInProgress',
      JSON.stringify({
        cocktails: {
          178319: ['Hpnotiq - 2 oz'],
        },
        meals: {},
      }),
    );
  });

  it('Detalhes de comidas', async () => {
    const {
      getByTestId,
    } = renderWithRouterAndBothContext('/comidas/1');
    await waitFor(() => {
      const recipeTitle = getByTestId(RECIPE_TITLE);
      expect(recipeTitle).toBeInTheDocument();
    });
  });

  it('Detalhes de bebidas', async () => {
    const {
      getByTestId,
    } = renderWithRouterAndBothContext('/bebidas/1');
    await waitFor(() => {
      const recipeTitle = getByTestId(RECIPE_TITLE);
      expect(recipeTitle).toBeInTheDocument();
    });
  });
});

describe('Testando RecipeDetails completo', () => {
  beforeEach(() => {
    clearAndSetLsTests();
    servicesMocked();
    localStorage.setItem(
      'recipeInProgress',
      JSON.stringify({
        cocktails: {
          178319: ['Hpnotiq - 2 oz', 'Pineapple Juice - 1 oz', 'Banana Liqueur - 1 oz'],
        },
        meals: {},
      }),
    );
  });

  it('Detalhes de bebidas', async () => {
    const {
      getByTestId,
    } = renderWithRouterAndBothContext('/bebidas/178319');
    await waitFor(() => {
      expect(getByTestId(RECIPE_TITLE)).toBeInTheDocument();
    });
  });
});
