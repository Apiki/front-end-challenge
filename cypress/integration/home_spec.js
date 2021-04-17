/*global cy, */
/// <reference types="cypress" />

describe("Testes do componente <Home/ >", () => {
  it("faz a chamada da Api por categoria", () => {
    cy.visit("http://localhost:3000/", {
      onBeforeLoad(win) {
        cy.spy(win, "fetch");
      },
    });
    cy.window()
      .its("fetch")
      .should(
        "be.calledWith",
        "https://blog.apiki.com/wp-json/wp/v2/posts?_embed&categories=518"
      );
  });
  it("faz a chamada da Api por página", () => {
    cy.visit("http://localhost:3000/", {
      onBeforeLoad(win) {
        cy.spy(win, "fetch");
      },
    });
    cy.window()
      .its("fetch")
      .should(
        "be.calledWith",
        "https://blog.apiki.com/wp-json/wp/v2/posts?_embed&categories=518&page=1"
      );
  });
  it("existe os 10 cards na tela inicial e o botão de carrgarar mais", () => {
    cy.visit("http://localhost:3000/");

    cy.get('[data-testid="card-posts"]').should("have.length", 10);
    cy.get('[data-testid="button-load-more-posts"]').should("exist");
    cy.get('[data-testid="button-load-more-posts"]').should(
      "have.text",
      "Carregar mais..."
    );
  });
  it(`o botão de "Carregar mais..." ao ser clicado, faz a requisição à API`, () => {
    cy.visit("http://localhost:3000/", {
      onBeforeLoad(win) {
        cy.spy(win, "fetch");
      },
    });

    cy.get('[data-testid="card-posts"]').should("have.length", 10);
    cy.get('[data-testid="button-load-more-posts"]').should("exist");
    cy.get('[data-testid="button-load-more-posts"]').should(
      "have.text",
      "Carregar mais..."
    );

    cy.get('[data-testid="button-load-more-posts"]').click();

    cy.window()
      .its("fetch")
      .should(
        "be.calledWith",
        "https://blog.apiki.com/wp-json/wp/v2/posts?_embed&categories=518&page=2"
      );
  });
  it(`os cards contem o elementos solicitados no projeto`, () => {
    cy.visit("http://localhost:3000/");

    cy.get('[data-testid="featured-image"]').should("have.length", 10);
    cy.get('[data-testid="title-card"]').should("have.length", 10);
    cy.get('[data-testid="link-to-post"]').should("have.length", 10);
  });
  it(`o link da postagem está correto e possui o atributo solicitado`, () => {
    cy.visit("http://localhost:3000/");

    cy.get('[data-testid="link-to-post"]').first().should("have.attr", "href");
    cy.get('[data-testid="link-to-post"]').first().click();

    cy.location().should((loc) =>
      expect(loc.pathname).to.eq("/interna/como-criar-web-stories-no-wordpress")
    );
  });
});
