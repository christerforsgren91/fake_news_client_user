describe('user can change App language', () => {
  beforeEach(() => {
    cy.intercept('GET', 'https://fakest-newzz.herokuapp.com/api/articles', {
      fixture: 'articles.json',
    });
    cy.intercept('GET', 'https://fakest-newzz.herokuapp.com/api/articles/?language=se', {
      fixture: 'articles_in_swedish.json',
    });
    cy.visit('/');
  });

  context('choosing Swedish language', () => {
    it('is expected to translate UI into Swedish', () => {
      cy.get('[data-cy=language-dropdown]').click();
      cy.get('.visible.menu.transition').contains('se').click();
      cy.get('[data-cy=home-tab]').should('contain', 'Hem');
      cy.get('[data-cy=backyard-tab]').should('contain', 'Bakgård');
      cy.get('[data-cy=login-button]').should('contain', 'Logga In');
      cy.get('[data-cy=category-button]')
        .first()
        .should('contain', 'Vetenskap');
    });

    it('is expected to show swedish articles', () => {
      cy.get('[data-cy=language-dropdown]').click();
      cy.get('.visible.menu.transition').contains('se').click();
      cy.get('[data-cy=article]').first().within(() => {
        cy.get('[data-cy=title]').should('contain', 'Svensk vapenexport till diktaturer fortsätter')
      })
    })
  });
});
