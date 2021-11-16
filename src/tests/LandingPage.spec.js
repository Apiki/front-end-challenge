import { fireEvent } from '@testing-library/react';
import 'jest';
import renderWithRouterAndContext from './helpers/renderWithRouterAndContext';
import dataAPIMocked from './mocks/servicesMocked';

const TITLE = 'landing-page-title';
const LOAD_BUTTON = 'landing-page-button';

describe('Testando LandingPage', () => {
  before(() => {
    dataAPIMocked();
  });

  afterAll(() => jest.clearAllMocks());

  it('Verifica título da página', () => {
    const {
      getByTestId,
    } = renderWithRouterAndContext('/receitas-feitas');
    const title = getByTestId(TITLE);
    expect(title).toBe('Artigos sobre desenvolvimento');
  });
});
