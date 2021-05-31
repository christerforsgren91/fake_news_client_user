describe('User is able to navigate to Category page', () => {
  beforeEach(() => {
    cy.intercept('GET', 'https://fakest-newzz.herokuapp.com/api/articles/?**', {
      fixture: 'articles.json',
    });
    cy.visit('/');
  });
  describe('Successfully', () => {
    beforeEach(() => {
      cy.intercept(
        'GET',
        'https://fakest-newzz.herokuapp.com/api/articles/?category=**',
        {
          fixture: 'categories.json',
        }
      );
      cy.get('[data-cy=category-bar]').within(() => {
        cy.get('[data-cy=category-button]').should('have.length', 6);
        cy.get('[data-cy=category-button]').eq(3).click();
      });
    });

    it('user is able to navigate to category page', () => {
      cy.get('[data-cy=category-header]').should('contain', 'Politics');
      cy.url().should('contain', 'http://localhost:3001/category');
    });

    it('is expected to show 2 articles', () => {
      cy.get('[data-cy=article]').should('have.length', 2);
    });
  });

  describe('unsuccessfully There is no article in this category', () => {
    beforeEach(() => {
      cy.intercept(
        'GET',
        'https://fakest-newzz.herokuapp.com/api/articles/?category=**',
        {
          articles: [],
        }
      );
    });
    it('is expected to display error message', () => {
      cy.get('[data-cy=category-button]').eq(3).click();
      cy.get('[data-cy=error-message]').should(
        'contain',
        'Selected category does not have any articles'
      );
    });
  });
});
