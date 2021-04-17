/*global cy, */
/// <reference types="cypress" />

describe("Testes dos elemntos do Header", () => {
    it("existe o texto da Nav bar no Header", () => {
      cy.visit('http://localhost:3000/');
  
      cy.get('li').should('contain.text', 'Home');
      cy.get('li').should('contain.text', 'Sobre');
      cy.get('li').should('contain.text', 'Contato');
    });

    it("existe existem os links no Header ", () => {
      cy.visit('http://localhost:3000/');

      cy.get('[name=sobre]').should('contain.text', 'Sobre').and('have.attr', 'href', 'https://apiki.com/empresa-especializada-em-wordpress/')   
      cy.get('[name=contato]').should('contain.text', 'Contato').and('have.attr', 'href', 'https://apiki.com/fale-com-gente/')   
      cy.get('[name=home]').should('contain.text', 'Home').and('have.attr', 'href', '/')   

  });
})