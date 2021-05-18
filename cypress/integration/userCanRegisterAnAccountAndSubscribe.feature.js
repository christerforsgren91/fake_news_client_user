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
        cy.get('[data-cy=registration-button]').click();
      });
      cy.get('[data-cy=registration-form]').within(() => {
        cy.get('[data-cy=registration-email]').type('user@mail.com');
        cy.get('[data-cy=registration-password]').type('password');
        cy.get('[data-cy=registration-confirmation-password]').type('password');
      });
      cy.get('[data-cy=payment-form]').within(() => {
        cy.wait(1000);

        cy.get('[data-cy=card-number]').within(() => {
          cy.get('iframe[name^="__privateStripeFrame"]').then(($iframe) => {
            const $body = $iframe.contents().find('body');
            cy.wrap($body)
              .find('input[name="cardnumber"]')
              .type('4242424242424242', { delay: 50 });
          });
        });
        cy.get('[data-cy=expiry-date]').within(() => {
          cy.get('iframe[name^="__privateStripeFrame"]').then(($iframe) => {
            const $body = $iframe.contents().find('body');
            cy.wrap($body)
              .find('input[name="exp-date"]')
              .type('0525', { delay: 50 });
          });
        });
        cy.get('[data-cy=cvc]').within(() => {
          cy.get('iframe[name^="__privateStripeFrame"]').then(($iframe) => {
            const $body = $iframe.contents().find('body');
            cy.wrap($body).find('input[name="cvc"]').type('424', { delay: 50 });
          });
        });
        cy.get('[data-cy=submit-payment]').click();
      });
      cy.get('[data-cy=success-message]').should(
        'contain',
        'Thank you for subscribing!'
      );
      cy.get('[data-cy=registration-submit]').click();
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
