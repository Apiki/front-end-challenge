import { fireEvent } from '@testing-library/react';
import renderWithRouterAndBothContext from './helpers/renders';
import clearAndSetLsTests from './helpers/clearAndSetLSTests';
import servicesMocked from './mocks/servicesMocked';

const FILTER_DRINK_BTN = 'filter-by-drink-btn';
const FILTER_FOOD_BTN = 'filter-by-food-btn';
const FILTER_ALL_BTN = 'filter-by-all-btn';

function setFavoriteRecipes() {
  localStorage.setItem(
    'favoriteRecipes',
    JSON.stringify([
      {
        alcoholicOrNot: '',
        area: 'British',
        category: 'Seafood',
        id: '52802',
        image: 'https://www.themealdb.com/images/media/meals/ysxwuq1487323065.jpg',
        name: 'Fish pie',
        type: 'comida',
      },
      {
        alcoholicOrNot: '',
        area: undefined,
        category: 'Seafood',
        id: '52802',
        image: 'https://www.themealdb.com/images/media/meals/ysxwuq1487323065.jpg',
        name: 'Fish pie',
        type: 'comida',
      },
      {
        alcoholicOrNot: 'Optional alcohol',
        area: '',
        category: 'Ordinary Drink',
        id: '15997',
        image: 'https://www.thecocktaildb.com/images/media/drink/vyxwut1468875960.jpg',
        name: 'GG',
        type: 'bebida',
      },
    ]),
  );
}

describe('Testando FavoriteRecipes', () => {
  beforeEach(() => {
    clearAndSetLsTests();
    servicesMocked();
    setFavoriteRecipes();
  });

  it('Testa botões', async () => {
    const {
      getByTestId,
    } = renderWithRouterAndBothContext('/receitas-favoritas');
    const filterByDrink = getByTestId(FILTER_DRINK_BTN);
    const filterByFood = getByTestId(FILTER_FOOD_BTN);
    const filterByAll = getByTestId(FILTER_ALL_BTN);
    fireEvent.click(filterByDrink);
    fireEvent.click(filterByFood);
    fireEvent.click(filterByAll);
    expect(filterByDrink).toBeInTheDocument();
    expect(filterByFood).toBeInTheDocument();
    expect(filterByAll).toBeInTheDocument();
  });
});
