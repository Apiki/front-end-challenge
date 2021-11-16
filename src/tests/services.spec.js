import { waitFor } from '@testing-library/react';
import MutationObserver from '@sheerun/mutationobserver-shim';
import * as mealAPI from '../services/theMealAPI';
import * as cocktailAPI from '../services/theCockTailAPI';

window.MutationObserver = MutationObserver;

describe('Testando serviços de API', () => {
  jest.spyOn(global, 'fetch');
  it('Testa mealAPI', async () => {
    const {
      searchBarFetchMeal,
      getMealDetail,
      getInitialMealsRecipes,
      getMealsCategoryList,
      getMealsByCategory,
      getMealRecomendations,
      getRandomMeal,
      getMealsIngredients,
      getMealsArea,
      getMealsByArea,
    } = mealAPI;
    await waitFor(() => {
      searchBarFetchMeal();
      getMealDetail();
      getInitialMealsRecipes();
      getMealsCategoryList();
      getMealsByCategory();
      getMealRecomendations();
      getRandomMeal();
      getMealsIngredients();
      getMealsArea();
      getMealsByArea('America');
    });
    expect(fetch).toHaveBeenCalled();
  });
});

describe('Testando serviços de API', () => {
  jest.spyOn(global, 'fetch');
  it('Testa cocktailAPI', async () => {
    const {
      getDrinkDetail,
      getInitialDrinksRecipes,
      getDrinksCategoryList,
      getDrinksByCategory,
      getDrinkRecomendations,
      getRandomDrink,
      getDrinksIngredients,
    } = cocktailAPI;
    await waitFor(() => {
      getDrinkDetail();
      getInitialDrinksRecipes();
      getDrinksCategoryList();
      getDrinksByCategory();
      getDrinkRecomendations();
      getRandomDrink();
      getDrinksIngredients();
    });
    expect(fetch).toHaveBeenCalled();
  });
});
