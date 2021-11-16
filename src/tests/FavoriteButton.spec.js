import { fireEvent, waitFor } from '@testing-library/react';
import MutationObserver from '@sheerun/mutationobserver-shim';
import renderWithRouterAndBothContext from './helpers/renders';
import clearAndSetLsTests from './helpers/clearAndSetLSTests';
import servicesMocked from './mocks/servicesMocked';

window.MutationObserver = MutationObserver;
const FIRST_RECIPE_CARD = '0-recipe-card';
const FAVORITE_BTN = 'favorite-btn';
const FAVORITE_BTN_HORIZONTAL = '0-horizontal-favorite-btn';
const favoriteHeart = 'http://localhost/whiteHeartIcon.svg';
const noFavoriteHeart = 'http://localhost/blackHeartIcon.svg';

describe('Testando Favorite Button nas páginas principais', () => {
  beforeEach(() => {
    clearAndSetLsTests();
    servicesMocked();
  });

  it('Favoritando e desfavoritando comida', async () => {
    const {
      getByTestId,
    } = renderWithRouterAndBothContext('/comidas');
    await waitFor(() => {
      const recipeCard = getByTestId(FIRST_RECIPE_CARD);
      expect(recipeCard).toBeInTheDocument();
      fireEvent.click(recipeCard);
    });
    await waitFor(() => {
      const favoriteButton = getByTestId(FAVORITE_BTN);
      expect(favoriteButton).toBeInTheDocument();
      fireEvent.click(favoriteButton);
      expect(favoriteButton.src).toBe(favoriteHeart);
      fireEvent.click(favoriteButton);
      expect(favoriteButton.src).toBe(noFavoriteHeart);
    });
  });

  it('Favoritando e desfavoritando bebida', async () => {
    const {
      getByTestId,
    } = renderWithRouterAndBothContext('/bebidas');
    await waitFor(() => {
      const recipeCardDrink = getByTestId(FIRST_RECIPE_CARD);
      expect(recipeCardDrink).toBeInTheDocument();
      fireEvent.click(recipeCardDrink);
    });
    await waitFor(() => {
      const favoriteButtonDrink = getByTestId(FAVORITE_BTN);
      expect(favoriteButtonDrink).toBeInTheDocument();
      fireEvent.click(favoriteButtonDrink);
      expect(favoriteButtonDrink.src).toBe(favoriteHeart);
      fireEvent.click(favoriteButtonDrink);
      expect(favoriteButtonDrink.src).toBe(noFavoriteHeart);
    });
  });
});

describe('Testando Favorite Button na página de receitas favoritas', () => {
  beforeEach(() => {
    clearAndSetLsTests();
    servicesMocked();
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
  });

  it('Desfavoritando', () => {
    const {
      findByTestId,
      getByTestId,
    } = renderWithRouterAndBothContext('/receitas-favoritas');
    const favoriteButton = getByTestId(FAVORITE_BTN_HORIZONTAL);
    fireEvent.click(favoriteButton);
    expect(findByTestId(FAVORITE_BTN_HORIZONTAL)).not.toBe({});
  });
});
