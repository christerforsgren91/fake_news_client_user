describe('User is able to logout after being logged in', () => {
  beforeEach(() => {
    cy.intercept(
      'POST',
      'https://fakest-newzz.herokuapp.com/api/auth/sign_in',
      {
        fixture: 'registration.json',
      }
    );
    cy.intercept(
      'DELETE',
      'https://fakest-newzz.herokuapp.com/api/auth/sign_out',
      {
        statusCode: 200,
        body: { message: 'See you again soon!' },
      }
    );
    cy.intercept('GET', 'https://fakest-newzz.herokuapp.com/api/articles/', {
      fixture: 'articles.json',
    });
    cy.intercept('GET', 'https://fakest-newzz.herokuapp.com/api/articles/3', {
      fixture: 'specificArticle.json',
    });

    cy.visit('/');
    cy.get('[data-cy=login-button]').click();
    cy.url('/login');
    cy.get('[data-cy=login-form]').within(() => {
      cy.get('[data-cy=login-email]').type('user@mail.com');
      cy.get('[data-cy=login-password]').type('password');
      cy.get('[data-cy=login-submit]').click();
      cy.wait(3000);
    });
  });

  it('is expected to log the user out', () => {
    cy.get('[data-cy=logout-button]').click();
    cy.get('[data-cy=logout-message]').should('contain', 'See you again soon!');
  });

  it('is expected that the user can no longer rate articles', () => {
    cy.get('[data-cy=article-card-1]').click();
    cy.get('[data-cy=article-rating-button]').find('i').eq(4).click();
    cy.get('#rating-message').should(
      'contain',
      'You have to subscribe to be able to rate'
    );
  });
});
