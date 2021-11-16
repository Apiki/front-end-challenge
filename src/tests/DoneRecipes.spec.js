import { fireEvent } from '@testing-library/react';
import MutationObserver from '@sheerun/mutationobserver-shim';
import renderWithRouterAndBothContext from './helpers/renders';
import clearAndSetLsTests from './helpers/clearAndSetLSTests';
import servicesMocked from './mocks/servicesMocked';

window.MutationObserver = MutationObserver;
const FILTER_DRINK_BTN = 'filter-by-drink-btn';
const FILTER_FOOD_BTN = 'filter-by-food-btn';
const ALL_BTN = 'filter-by-all-btn';
const FIRST_RECIPE_NAME = '0-horizontal-name';

function setDoneRecipes() {
  localStorage.setItem(
    'doneRecipes',
    JSON.stringify([{ alcoholicOrNot: 'Optional alcohol',
      area: '',
      category: '',
      doneDate: '19/08/2021',
      id: '15997',
      image: 'https://www.thecocktaildb.com/images/media/drink/vyxwut1468875960.jpg',
      name: 'GG',
      tags: [],
      type: 'bebida' },
    { alcoholicOrNot: '',
      area: 'British',
      category: 'Dessert',
      doneDate: '19/08/2021',
      id: '52991',
      image: 'https://www.themealdb.com/images/media/meals/qe8pf51576795532.jpg',
      name: 'Mince Pies',
      tags: ['Christmas'],
      type: 'comida' }]),
  );
}

describe('Testando DoneRecipes filtros', () => {
  beforeEach(() => {
    clearAndSetLsTests();
    servicesMocked();
    setDoneRecipes();
  });

  it('Filtra por comida, bebida e por all', () => {
    const {
      getByTestId,
    } = renderWithRouterAndBothContext('/receitas-feitas');
    const filterDrink = getByTestId(FILTER_DRINK_BTN);
    const filterFood = getByTestId(FILTER_FOOD_BTN);
    const allButton = getByTestId(ALL_BTN);
    const firstRecipe = getByTestId(FIRST_RECIPE_NAME);
    fireEvent.click(filterDrink);
    expect(firstRecipe).toHaveTextContent('GG');
    fireEvent.click(filterFood);
    expect(firstRecipe).toHaveTextContent('Mince Pies');
    fireEvent.click(allButton);
    expect(firstRecipe).toHaveTextContent('GG');
  });
});

describe('Testando DoneRecipes botões', () => {
  beforeEach(() => {
    clearAndSetLsTests();
    servicesMocked();
  });

  it('Testa botões', () => {
    const {
      getByTestId,
    } = renderWithRouterAndBothContext('/receitas-feitas');
    const filterDrink = getByTestId(FILTER_DRINK_BTN);
    const filterFood = getByTestId(FILTER_FOOD_BTN);
    const allButton = getByTestId(ALL_BTN);
    fireEvent.click(filterDrink);
    expect(filterDrink).toBeInTheDocument();
    expect(filterFood).toBeInTheDocument();
    expect(allButton).toBeInTheDocument();
  });
});
