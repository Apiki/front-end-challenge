import { fireEvent, waitFor } from '@testing-library/react';
import MutationObserver from '@sheerun/mutationobserver-shim';
import renderWithRouterAndBothContext from './helpers/renders';
import clearAndSetLsTests from './helpers/clearAndSetLSTests';
import servicesMocked from './mocks/servicesMocked';

window.MutationObserver = MutationObserver;
const SEARCH_TOP_BTN = 'search-top-btn';
const SEARCH_INPUT = 'search-input';
const INGREDIENT_SEARCH = 'ingredient-search-radio';
const NAME_SEARCH = 'name-search-radio';
const LETTER_SEARCH = 'first-letter-search-radio';
const EXEC_SEARCH = 'exec-search-btn';
const FIRST_RECIPE_NAME = '0-card-name';

describe('Testando SearchBar em bebidas - ingrediente', () => {
  beforeEach(() => {
    clearAndSetLsTests();
    servicesMocked();
  });

  it('Busca por ingrediente', async () => {
    const {
      getByTestId,
    } = renderWithRouterAndBothContext('/bebidas');
    await waitFor(() => {
      const searchTopButton = getByTestId(SEARCH_TOP_BTN);
      fireEvent.click(searchTopButton);
    });
    await waitFor(() => {
      const searchInput = getByTestId(SEARCH_INPUT);
      const ingredientRadio = getByTestId(INGREDIENT_SEARCH);
      fireEvent.change(searchInput, { target: { value: 'test' } });
      fireEvent.click(ingredientRadio);
    });
    await waitFor(() => {
      const execSearchButton = getByTestId(EXEC_SEARCH);
      fireEvent.click(execSearchButton);
    });
    await waitFor(() => {
      const recipeName = getByTestId(FIRST_RECIPE_NAME);
      expect(recipeName).toHaveTextContent('151 Florida Bushwacker');
    });
  });
});

describe('Testando SearchBar em bebidas - nome', () => {
  beforeEach(() => {
    clearAndSetLsTests();
    servicesMocked();
  });

  it('Busca por nome', async () => {
    const {
      getByTestId,
    } = renderWithRouterAndBothContext('/bebidas');
    await waitFor(() => {
      const searchTopButton = getByTestId(SEARCH_TOP_BTN);
      fireEvent.click(searchTopButton);
    });
    await waitFor(() => {
      const searchInput = getByTestId(SEARCH_INPUT);
      const nameRadio = getByTestId(NAME_SEARCH);
      fireEvent.change(searchInput, { target: { value: 'test' } });
      fireEvent.click(nameRadio);
    });
    await waitFor(() => {
      const execSearchButton = getByTestId(EXEC_SEARCH);
      fireEvent.click(execSearchButton);
    });
    await waitFor(() => {
      const recipeName = getByTestId(FIRST_RECIPE_NAME);
      expect(recipeName).toHaveTextContent('Castillian Hot Chocolate');
    });
  });
});

describe('Testando SearchBar em bebidas - letra', () => {
  beforeEach(() => {
    clearAndSetLsTests();
    servicesMocked();
  });

  it('Busca por primeira letra', async () => {
    const {
      getByTestId,
    } = renderWithRouterAndBothContext('/bebidas');
    await waitFor(() => {
      const searchTopButton = getByTestId(SEARCH_TOP_BTN);
      fireEvent.click(searchTopButton);
    });
    await waitFor(() => {
      const searchInput = getByTestId(SEARCH_INPUT);
      const letterRadio = getByTestId(LETTER_SEARCH);
      fireEvent.change(searchInput, { target: { value: 't' } });
      fireEvent.click(letterRadio);
    });
    await waitFor(() => {
      const execSearchButton = getByTestId(EXEC_SEARCH);
      fireEvent.click(execSearchButton);
    });
    await waitFor(() => {
      const recipeName = getByTestId(FIRST_RECIPE_NAME);
      expect(recipeName).toHaveTextContent('GG');
    });
  });
});

describe('Testando SearchBar em bebidas alert', () => {
  beforeEach(() => {
    clearAndSetLsTests();
    servicesMocked();
    jest.spyOn(window, 'alert');
  });

  it('Busca por alert', async () => {
    const {
      getByTestId,
    } = renderWithRouterAndBothContext('/bebidas');
    await waitFor(() => {
      const searchTopButton = getByTestId(SEARCH_TOP_BTN);
      fireEvent.click(searchTopButton);
    });
    await waitFor(() => {
      const searchInput = getByTestId(SEARCH_INPUT);
      const letterRadio = getByTestId(LETTER_SEARCH);
      fireEvent.change(searchInput, { target: { value: 'test' } });
      fireEvent.click(letterRadio);
    });
    await waitFor(() => {
      const execSearchButton = getByTestId(EXEC_SEARCH);
      fireEvent.click(execSearchButton);
    });
    await waitFor(() => {
      expect(window.alert).toHaveBeenCalled();
    });
  });
});

describe('Testando SearchBar em comidas alert', () => {
  beforeEach(() => {
    clearAndSetLsTests();
    jest.spyOn(window, 'alert');
    servicesMocked();
  });

  it('Busca por alert', async () => {
    const {
      getByTestId,
    } = renderWithRouterAndBothContext('/comidas');
    await waitFor(() => {
      const searchTopButton = getByTestId(SEARCH_TOP_BTN);
      fireEvent.click(searchTopButton);
    });
    await waitFor(() => {
      const letterRadio = getByTestId(LETTER_SEARCH);
      const searchInput = getByTestId(SEARCH_INPUT);
      fireEvent.change(searchInput, { target: { value: 'test' } });
      fireEvent.click(letterRadio);
    });
    await waitFor(() => {
      const execSearchButton = getByTestId(EXEC_SEARCH);
      fireEvent.click(execSearchButton);
    });
    await waitFor(() => {
      expect(window.alert).toHaveBeenCalled();
    });
  });
});

describe('Testando SearchBar com um resultado', () => {
  beforeEach(() => {
    clearAndSetLsTests();
    servicesMocked();
  });

  it('Deve redirecionar para página de detalhes', async () => {
    const {
      getByTestId,
      pathname,
    } = renderWithRouterAndBothContext('/bebidas');
    await waitFor(() => {
      const searchTopButton = getByTestId(SEARCH_TOP_BTN);
      fireEvent.click(searchTopButton);
    });
    await waitFor(() => {
      const searchInput = getByTestId(SEARCH_INPUT);
      const nameRadio = getByTestId(NAME_SEARCH);
      fireEvent.change(searchInput, { target: { value: 'test one drink' } });
      fireEvent.click(nameRadio);
    });
    await waitFor(() => {
      const execSearchButton = getByTestId(EXEC_SEARCH);
      fireEvent.click(execSearchButton);
    });
    expect(pathname()).toBe('/bebidas/178319');
  });
});

describe('Testando SearchBar em comidas - ingrediente', () => {
  beforeEach(() => {
    clearAndSetLsTests();
    servicesMocked();
  });

  it('Busca por ingrediente', async () => {
    const {
      getByTestId,
    } = renderWithRouterAndBothContext('/comidas');
    await waitFor(() => {
      const searchTopButton = getByTestId(SEARCH_TOP_BTN);
      fireEvent.click(searchTopButton);
    });
    await waitFor(() => {
      const searchInput = getByTestId(SEARCH_INPUT);
      const ingredientRadio = getByTestId(INGREDIENT_SEARCH);
      fireEvent.change(searchInput, { target: { value: 'tests' } });
      fireEvent.click(ingredientRadio);
    });
    await waitFor(() => {
      const execSearchButton = getByTestId(EXEC_SEARCH);
      fireEvent.click(execSearchButton);
    });
    await waitFor(() => {
      const recipeName = getByTestId(FIRST_RECIPE_NAME);
      expect(recipeName).toHaveTextContent('Brown Stew Chicken');
    });
  });
});
