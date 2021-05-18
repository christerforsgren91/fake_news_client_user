describe('User can use rating functionality', () => {
  beforeEach(() => {
    cy.intercept('GET', 'https://fakest-newzz.herokuapp.com/api/articles', {
      fixture: 'articles.json',
    });
    cy.intercept('PUT', 'https://fakest-newzz.herokuapp.com/api/ratings', {
      statusCode: 200,
    });
    cy.intercept('GET', 'https://fakest-newzz.herokuapp.com/api/articles/3', {
      fixture: 'specificArticle.json',
    });
    cy.visit('/');
  });

  it('is expected to display average rating on each article card', () => {
    cy.get('[data-cy=articles-container]').within(() => {
      cy.get('[data-cy=article-card-0]').within(() => {
        cy.get('[data-cy=rating]')
          .find('i')
          .eq(3)
          .should('have.attr', 'aria-checked', 'true');
      });
    });
  });
  it('is expected to allow user to rate', () => {
    cy.visit('/articles/3');
    cy.get('[data-cy=article-container]').within(() => {
      cy.get('[data-cy=article-rating]').should('contain', '3.7');
      cy.get('[data-cy=article-rating-button]').find('i').eq(4).click();
    });
  });
});
