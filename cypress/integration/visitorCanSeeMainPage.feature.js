describe('Visitor can see main page', () => {
  describe('Success', () => {
    beforeEach(() => {
      cy.visit('/');
    });
    it('displays main page layout', () => {
      cy.get('[data-cy=navbar]').should('exist');
      cy.get('[data-cy=header]').should('exist');
      cy.get('[data-cy=category-container]')
        .children()
        .should('have.length', 5);
      cy.get('[data-cy=articles-container]').should('exist');
      cy.get('[data-cy=footer]').should('exist');
    });
  });
});
