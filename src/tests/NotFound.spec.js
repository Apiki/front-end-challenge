import renderWithRouterAndBothContext from './helpers/renders';
import clearAndSetLsTests from './helpers/clearAndSetLSTests';
import servicesMocked from './mocks/servicesMocked';

describe('Testando pagina NotFound', () => {
  beforeEach(() => {
    clearAndSetLsTests();
    servicesMocked();
  });

  it('Procura por not found', async () => {
    const {
      getByText,
    } = renderWithRouterAndBothContext('/not-found');
    const notFound = getByText(/not found/i);
    expect(notFound).toBeInTheDocument();
  });
});
