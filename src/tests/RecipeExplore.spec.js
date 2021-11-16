import renderWithRouterAndBothContext from './helpers/renders';
import clearAndSetLsTests from './helpers/clearAndSetLSTests';
import servicesMocked from './mocks/servicesMocked';

const EXPLORE_INGREDIENT = 'explore-by-ingredient';
const EXPLORE_AREA = 'explore-by-area';
const EXPLORE_SURPRISE = 'explore-surprise';

describe('Testando pagina de RecipeExplore', () => {
  beforeEach(() => {
    clearAndSetLsTests();
    servicesMocked();
  });

  it('Verificando botões para comidas', () => {
    const {
      getByTestId,
    } = renderWithRouterAndBothContext('/explorar/comidas');
    const exploreIngredient = getByTestId(EXPLORE_INGREDIENT);
    const exploreArea = getByTestId(EXPLORE_AREA);
    const exploreSurprise = getByTestId(EXPLORE_SURPRISE);
    expect(exploreIngredient).toBeInTheDocument();
    expect(exploreArea).toBeInTheDocument();
    expect(exploreSurprise).toBeInTheDocument();
  });

  it('Verificando botões para bebidas', () => {
    const {
      getByTestId,
    } = renderWithRouterAndBothContext('/explorar/bebidas');
    const exploreIngredient = getByTestId(EXPLORE_INGREDIENT);
    const exploreSurprise = getByTestId(EXPLORE_SURPRISE);
    expect(exploreIngredient).toBeInTheDocument();
    expect(exploreSurprise).toBeInTheDocument();
  });
});
