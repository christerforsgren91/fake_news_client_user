describe('Displays the main page with a list of article', () => {
  describe('success', () => {
    beforeEach(() => {
      cy.intercept('GET', 'https://fake-newzzzz.herokuapp.com/api/articles', {
        fixture: 'articles.json',
      });
      cy.visit('/');
    });
    it('displays main page layout', () => {
      cy.get('[data-cy=navbar]').should('contain', 'Home');
      cy.get('[data-cy=header]').should('contain', 'FAKE?NEWS');
      cy.get('[data-cy=breaking-news]').should('contain', [0]);
      cy.get('[data-cy=breaking-img]').should('exist');
      cy.get('[data-cy=breaking-title]').should('contain', 'Something');
      cy.get('[data-cy=breaking-teaser]').should('contain', 'Something more');
      cy.get('[data-cy=breaking-date]').should('contain', '2021-05-12');
      cy.get('[data-cy=articles-container]').should('contain', []);
      cy.get('[data-cy=footer]').should('exist');
      cy.get('[data-cy=articles-container]').within(() => {
        cy.get('[data-cy=article-card-0]').within(() => {
          cy.get('[data-cy=title]').should('contain', 'Sup');
          cy.get('[data-cy=teaser]').should('contain', 'something');
          cy.get('[data-cy=created-at]').should('contain', '2021-05-12');
        });
      });
    });
  });
  describe('unsuccessfully', () => {
    before(() => {
      cy.intercept('GET', 'https://fake-newzzzz.herokuapp.com/api/articles', {
        statusCode: 500,
        error: '500 Internal Server Error',
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
