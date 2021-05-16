describe('User is able to navigate to Category page', () => {
  beforeEach(() => {
    cy.intercept('GET', 'https://fake-newzzzzz.herokuapp.com/api/articles/', {
      fixture: 'articles.json',
    });
    cy.visit('/');
  });
  describe('Successfully', () => {
    beforeEach(() => {
      cy.intercept(
        'GET',
        'https://fake-newzzzzz.herokuapp.com/api/articles/**',
        {
          fixture: 'categories.json',
        }
      );
    });

    it('user is able to navigate to category page', () => {
      cy.get('[data-cy=category-bar]').within(() => {
        cy.get('[data-cy=category-button]').should('have.length', 6);
        cy.get('[data-cy=category-button]').eq(3).click();
      });
      cy.get('[data-cy=category-header]').should('contain', 'Politics');
      cy.url().should('contain', 'http://localhost:3001/category');
    });
  });

  describe('unsuccessfully There is no article in this category', () => {
    beforeEach(() => {
      cy.intercept(
        'GET',
        'https://fake-newzzzzz.herokuapp.com/api/articles/**',
        {
          articles: [],
        }
      );
    });
    it ('is expected to display error message', () => {
      cy.get('[data-cy=error-message]').should('contain', 'Selected category does not have any articles');
    })
  });
});
