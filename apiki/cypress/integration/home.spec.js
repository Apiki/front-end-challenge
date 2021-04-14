const CARD_POST = '.card-post';
const CARD_POST_IMG = '.card-post__img';
const CARD_POST_HEADER = '.card-post__header';
const CARD_POST_LINK = '.card-post__link';

describe("1 - [INITIAL SCREEN] verifies if initial screen after load has the last 10 registered posts.", () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000/');
  });

  it('should have 10 posts on screen', () => {
    get(CARD_POST).should('have.length', 10);
  });

  it('should have 10 images on screen', () => {
    get(CARD_POST_IMG).should('have.length', 10);
  });

  it('should have 10 headers on screen', () => {
    get(CARD_POST_HEADER).should('have.length', 10);
  });

  it('should have 10 links on screen', () => {
    get(CARD_POST_LINK)
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

    get(CARD_POST).should('have.length', 20);
    get(CARD_POST_IMG).should('have.length', 20);
    get(CARD_POST_HEADER).should('have.length', 20);
    get(CARD_POST_LINK).should('have.length', 20).should('have.attr', 'slug');
  })
});

describe(`3 - [INTERNAL SCREEN] verifies if exist on screen the data of the post clicked`, () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000/');
  });

  const CORRESPONDENT_TITLE = get(CARD_POST_HEADER).first();

  get(CARD_POST_LINK).first().click();

  it('should have an image on screen', () => {
    
  });

  it('should have the correspondent title on screen', () => {
    cy.contains(CORRESPONDENT_TITLE);
  });
  
  it('should have the correspondent content on screen', () => {

  });
})

