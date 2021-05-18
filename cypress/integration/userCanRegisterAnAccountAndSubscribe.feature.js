describe('User is able to register an account and subscribe', () => {
  beforeEach(() => {
    cy.intercept('POST', 'https://fakest-newzz.herokuapp.com/api/auth', {
      fixture: 'registration.json',
    });

    cy.visit('/');
  });

  describe('user is able to register an account', () => {
    it('is expected to show registration form', () => {
      cy.get('[data-cy=login-button]').click();
      cy.get('[data-cy=login-form]').within(() => {
        cy.get('[date-cy=registration-button]').click();
      });
      cy.get('[data-cy=registration-form]').within(() => {
        cy.get('[data-cy=registration-email]').type('user@mail.com');
        cy.get('[data-cy=registration-password]').type('password');
        cy.get('[data-cy=registration-confirmation-password]').type('password');
        cy.get('[data-cy=registration-submit]').click();
      });
    });
  });

  describe('user is able to login', () => {
    it('is expected to show login form', () => {
      cy.get('[data-cy=login-button]').click();
      cy.get('[data-cy=login-form]').within(() => {
        cy.get('[data-cy=login-email]').type('user@mail.com');
        cy.get('[data-cy=login-password]').type('password');
        cy.get('[data-cy=login-submit]').click();
      });
    });
  });
});
