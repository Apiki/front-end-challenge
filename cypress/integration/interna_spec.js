/*global cy, */
/// <reference types="cypress" />

describe("Testes do componente <Interna/ >", () => {
  it("faz a chamada da Api pelo slug do post", () => {
    cy.visit("http://localhost:3000/", {
      onBeforeLoad(win) {
        cy.spy(win, "fetch");
      },
    });
    cy.get('[data-testid="link-to-post"]').first().click();

    cy.location().should((loc) =>
      expect(loc.pathname).to.eq("/interna/como-criar-web-stories-no-wordpress")
    );

    cy.window()
      .its("fetch")
      .should(
        "be.calledWith",
        "https://blog.apiki.com/wp-json/wp/v2/posts?_embed&slug=como-criar-web-stories-no-wordpress"
      );
  });
  it(`os cards contem o elementos solicitados no projeto`, () => {
    cy.visit(
      "http://localhost:3000/interna/como-criar-web-stories-no-wordpress"
    );

    cy.get('[data-testid="title-details-post"]').should("exist");
    cy.get('[data-testid="featured-details-image-post"]').should("exist");
    cy.get('[data-testid="content-details-post"]').should("exist");
  });
});
