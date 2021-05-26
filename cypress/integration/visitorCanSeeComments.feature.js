describe('visitor can see a list of comments under article', () => {
  beforeEach(() => {
    cy.intercept('GET', 'https://fakest-newzz.herokuapp.com/api/articles/', {
        fixture: 'articles.json',
      });
      cy.intercept(
        'GET',
        'https://fakest-newzz.herokuapp.com/api/articles/3',
        { fixture: 'specificArticleWithComments.json' }
      );
      cy.visit('/');
      cy.get('[data-cy=article-card-1]').click();
  })
})
