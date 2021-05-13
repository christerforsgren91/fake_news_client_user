describe('Visitor can see main page', () => {
  describe('success', () => {
    beforeEach(() => {
      cy.intercept('GET', 'https://fake-newzzzz.herokuapp.com/api/articles', {
        fixture: 'articles.json',
      });
      cy.visit('/');
    });
    it('displays main page layout', () => {
      cy.get('[data-cy=navbar]').should('exist');
      cy.get('[data-cy=header]').should('exist');
      cy.get('[data-cy=breaking-news]').should('exist');
      cy.get('[data-cy=braking-img]').should('exist');
      cy.get('[data-cy=braking-img]').should('exist');
      cy.get('[data-cy=breaking-title]').should('contain', 'Something');
      cy.get('[data-cy=breaking-teaser]').should('contain', 'Something more');
      cy.get('[data-cy=breaking-date]').should('contain', '2021-05-12');
      cy.get('[data-cy=articles-container]').should('exist');
      cy.get('[data-cy=footer]').should('exist');
    });
  });
  describe('unsuccessfully', () => {
    before(() => {
      cy.intercept('GET', 'https://fake-newzzzz.herokuapp.com/api/articles', {
        statusCode: 500,
        error: '500 Internal Server Error |  0     bytes\n',
      });
      cy.visit('/');
    });
    it('is expected to show error message 500', () => {
      cy.get('[data-cy=error-message]').should(
        'contain',
        'Servers are currently not responding, Pleas try again later'
      );
    });
  });
});
