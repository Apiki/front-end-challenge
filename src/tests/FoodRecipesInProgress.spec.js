import { fireEvent, waitFor } from '@testing-library/react';
import MutationObserver from '@sheerun/mutationobserver-shim';
import renderWithRouterAndBothContext from './helpers/renders';
import clearAndSetLsTests from './helpers/clearAndSetLSTests';
import servicesMocked from './mocks/servicesMocked';

window.MutationObserver = MutationObserver;
const FINISH_BTN = 'finish-recipe-btn';
const FIRST_INGREDIENT = '0-ingredient-step';
const SECOND_INGREDIENT = '1-ingredient-step';
const THIRD_INGREDIENT = '2-ingredient-step';

describe('Testando FoodRecipesInProgress', () => {
  beforeEach(() => {
    clearAndSetLsTests();
    servicesMocked();
  });

  it('Finaliza receita', async () => {
    const {
      getByTestId,
      pathname,
    } = renderWithRouterAndBothContext('/comidas/1/in-progress');
    await waitFor(() => {
      const firstIngredient = getByTestId(FIRST_INGREDIENT);
      const secondIngredient = getByTestId(SECOND_INGREDIENT);
      const thirdIngredient = getByTestId(THIRD_INGREDIENT);
      fireEvent.click(firstIngredient, secondIngredient, thirdIngredient);
      fireEvent.click(firstIngredient, secondIngredient, thirdIngredient);
      fireEvent.click(firstIngredient, secondIngredient, thirdIngredient);
    });
    await waitFor(() => {
      const finishButton = getByTestId(FINISH_BTN);
      fireEvent.click(finishButton);
    });
    expect(pathname()).toBe('/receitas-feitas');
  });
});
