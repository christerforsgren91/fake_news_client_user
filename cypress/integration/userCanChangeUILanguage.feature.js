describe('user can change UI language', () => {
  beforeEach(() => {
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
  });
});
