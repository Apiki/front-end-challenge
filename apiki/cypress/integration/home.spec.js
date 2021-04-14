const CARD_POST = '.card-post';
const CARD_POST_IMG = '.card-post__img';
const CARD_POST_HEADER = '.card-post__header';
const CARD_POST_LINK = '.card-post__link';

const POST_DETAILS = '.post-details';
const POST_DETAILS_IMG = '.post-details__img';
const POST_DETAILS_TITLE = '.post-details__title';
const POST_DETAILS_CONTENT = '.post-details__content';

describe("1 - [INITIAL SCREEN] verifies if initial screen after load has the last 10 registered posts.", () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000/');
  });

  it('should have 10 posts on screen', () => {
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
  beforeEach(() => {
    cy.visit('http://localhost:3000/');
  });

  it("should have a button with a text 'Carregar mais...'", () => {
    cy.contains('Carregar mais...').should('have.type', 'button');
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
  beforeEach(() => {
    cy.visit('http://localhost:3000/');
  });
    
  it('should have the data correspondent to post clicked', () => {
    const CORRESPONDENT_TITLE = cy.get(CARD_POST_HEADER).first();
    cy.get(CARD_POST_LINK).first().click();

    cy.get(POST_DETAILS_IMG).should('exist');
    cy.get(POST_DETAILS_TITLE).should('exist');
    cy.contains(CORRESPONDENT_TITLE);
    cy.get(POST_DETAILS_CONTENT).should('exist');
  });
})

