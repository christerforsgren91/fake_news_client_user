describe('Visitor can see the main page with articles', () => {
  describe('success', () => {
    beforeEach(() => {
      cy.intercept('GET', 'https://fake-newzzzz.herokuapp.com/api/articles', {
        fixture: 'articles.json',
      });
      cy.visit('/');
    });
  });
  it('loads fake articles', () => {
    cy.get('[data-cy=articles-container]').within(() => {
      cy.get('[data-cy=article-card-0]').within(() => {
        cy.get('[datacy=title]').should('contain', 'Something');
        cy.get('[datacy=teaser]').should('contain', 'Something more');
        cy.get('[datacy=created_at]').should('contain', '2021-05-12');
      });
    });
  });
});
