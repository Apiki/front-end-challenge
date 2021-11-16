import { fireEvent, waitFor } from '@testing-library/react';
import MutationObserver from '@sheerun/mutationobserver-shim';
import renderWithRouterAndBothContext from './helpers/renders';
import clearAndSetLsTests from './helpers/clearAndSetLSTests';
import servicesMocked from './mocks/servicesMocked';

window.MutationObserver = MutationObserver;
const SHARE_BTN = 'share-btn';
const FIRST_RECIPE_CARD = '0-recipe-card';
const LINK_COPIED = 'link-copied';

beforeEach(() => {
  clearAndSetLsTests();
  servicesMocked();
  Object.assign(navigator, {
    clipboard: {
      writeText: () => {},
    },
  });
  jest.spyOn(navigator.clipboard, 'writeText');
  localStorage.setItem(
    'favoriteRecipes',
    JSON.stringify([{
      alcoholicOrNot: '',
      area: 'British',
      category: 'Seafood',
      id: '52802',
      image: 'https://www.themealdb.com/images/media/meals/ysxwuq1487323065.jpg',
      name: 'Fish pie',
      type: 'comida',
    }]),
  );
});

describe('Testando Share Button', () => {
  it('Copiando link', async () => {
    const { getByTestId } = renderWithRouterAndBothContext('/receitas-favoritas');
    await waitFor(() => {
      const shareButton = getByTestId(SHARE_BTN);
      expect(shareButton).toBeInTheDocument();
      fireEvent.click(shareButton);
    });
    await waitFor(() => {
      const linkCopied = getByTestId(LINK_COPIED);
      expect(linkCopied).toHaveTextContent(/link copiado!/i);
      expect(linkCopied.className).toBe('link-black');
    });
  });

  it('Verificando classe do link copiado', async () => {
    const { getByTestId } = renderWithRouterAndBothContext('/comidas');
    await waitFor(() => {
      const recipeCardDrink = getByTestId(FIRST_RECIPE_CARD);
      expect(recipeCardDrink).toBeInTheDocument();
      fireEvent.click(recipeCardDrink);
    });
    await waitFor(() => {
      const shareButton = getByTestId(SHARE_BTN);
      fireEvent.click(shareButton);
    });
    await waitFor(() => {
      const linkCopied = getByTestId(LINK_COPIED);
      expect(linkCopied).toHaveTextContent(/link copiado!/i);
      expect(linkCopied.className).toBe('link-white');
    });
  });
});
