import mockedPosts from "../../src/mocks/posts";

const CARD_POST = '.card-post';
const CARD_POST_LINK = '.card-post__link';
const CARD_POST_IMG = '.card-post-front__img';
const CARD_POST_HEADER = '.card-post-front__header';

const POST_DETAILS = '.post-details';
const POST_DETAILS_IMG = '.post-details__img';
const POST_DETAILS_TITLE = '.post-details__title';
const POST_DETAILS_CONTENT = '.post-details__content';

const apiPostsResponse = () => Promise.resolve({
  json: () => Promise.resolve(mockedPosts),
  headers: {
    get: () => Promise.resolve({ 'x-wp-totalpages': 17 }),
  },
});

beforeEach(() => {
  cy.visit('http://localhost:3000/', {
    onBeforeLoad(win) {
      win.fetch = apiPostsResponse;
      cy.spy(win, 'fetch');
    },
  });
});

describe("1 - [INITIAL SCREEN] verifies if initial screen after load has the last 10 registered posts.", () => {

  it('verifies if are doing request to api when loading the page', async () => {
    cy.window()
      .its('fetch')
      .should('be.calledWith', 'https://blog.apiki.com/wp-json/wp/v2/posts?_embed&categories=518&page=1');

    cy.contains('Como criar Web Stories no WordPress');
  })

  it  ('should have 10 posts on screen', () => {
    cy.get(CARD_POST).should('have.length', 10);
  });

  it('should have 10 images on screen', () => {
    cy.get(CARD_POST_IMG).should('have.length', 10);
  });

  it('should have 10 headers on screen', () => {
    cy.get(CARD_POST_HEADER).should('have.length', 10);
  });

  it('should have 10 links on screen', () => {
    cy.get(CARD_POST_LINK)
      .should('have.length', 10)
      .should('have.attr', 'slug');
  });
});

describe(`2 - [INITIAL SCREEN] it should have a button called 'Carregar mais...' on screen
that load more 10 posts on screen.`, () => {
  

  it("should have a button with a text 'Carregar mais...'", () => {
    cy.contains('Carregar mais...');
  });

  it("should load more 10 posts on screen on click it.", () => {
    cy.contains('Carregar mais...').click();

    cy.get(CARD_POST).should('have.length', 20);
    cy.get(CARD_POST_IMG).should('have.length', 20);
    cy.get(CARD_POST_HEADER).should('have.length', 20);
    cy.get(CARD_POST_LINK).should('have.length', 20).should('have.attr', 'slug');
  })
});

describe(`3 - [INTERNAL SCREEN] verifies if exist on screen the data of the post clicked`, () => {
  it('should have the data correspondent to post clicked', async () => {
    cy.get(CARD_POST_HEADER).first().then(($header) => {
      cy.get(CARD_POST_LINK).first().click();

      cy.get(POST_DETAILS_IMG).should('exist');
      cy.get(POST_DETAILS_TITLE).should('exist');
      cy.get(POST_DETAILS_CONTENT).should('exist');
      cy.contains($header.text());
    })

  });
})
