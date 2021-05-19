describe('User can use rating functionality', () => {
  beforeEach(() => {
    cy.intercept('GET', 'https://fakest-newzz.herokuapp.com/api/articles', {
      fixture: 'articles.json',
    });
    cy.intercept('GET', 'https://fakest-newzz.herokuapp.com/api/articles/3', {
      fixture: 'specificArticle.json',
    });
    cy.visit('/');
  });
  describe('Successfully', () => {
    beforeEach(() => {
      cy.intercept('POST', 'https://fakest-newzz.herokuapp.com/api/ratings', {
        statusCode: 201,
      });
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
    it('is expected to display average rating on breaking news', () => {
      cy.get('[data-cy=breaking-rating]')
        .find('i')
        .eq(4)
        .should('have.attr', 'aria-checked', 'true');
    });
    it('is expected to allow user to rate', () => {
      cy.visit('/articles/3');
      cy.get('[data-cy=article-container]').within(() => {
        cy.get('[data-cy=article-rating]').should('contain', '3.7');
        cy.get('[data-cy=article-rating-button]').find('i').eq(4).click();
      });
      cy.get('#rating-message').should(
        'contain',
        'Thank you for your opinion!'
      );
    });
  });
  describe('Unsuccessfully', () => {
    beforeEach(() => {
      cy.intercept('POST', 'https://fakest-newzz.herokuapp.com/api/ratings', {
        statusCode: 500,
      });
      cy.visit('/articles/3');
    });

    it('is expected to display an error message', () => {
      cy.get('[data-cy=article-rating-button]').find('i').eq(4).click();
      cy.get('#rating-message').should(
        'contain',
        'Sorry your vote was not registered'
      );
    });
  });
});
