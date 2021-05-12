describe('Visitor can see the main page with articles', () => {
  describe('success', () => {
    beforeEach(() => {
      cy.intercept('GET', 'https://fake-newzzzz.herokuapp.com/api/articles', {
        fixture: 'articles.json',
      });
      cy.visit('/');
    });

    it('loads fake articles', () => {
      cy.get('[data-cy=articles-container]').within(() => {
        cy.get('[data-cy=article-card-0]').within(() => {
          cy.get('[data-cy=title]').should('contain', 'Sup');
          cy.get('[data-cy=teaser]').should('contain', 'something');
          cy.get('[data-cy=created-at]').should('contain', '2021-05-12');
        });
      });
    });
  });
});
