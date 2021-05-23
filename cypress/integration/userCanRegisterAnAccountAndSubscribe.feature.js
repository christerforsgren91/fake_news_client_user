describe('User is able to register an account and subscribe', () => {
  beforeEach(() => {
    cy.intercept('POST', 'https://api.stripe.com/v1/tokens', { id: '1304124' });

    cy.visit('/');

    cy.get('[data-cy=login-button]').click();
    cy.url('/registration');
    cy.get('[data-cy=login-form]').within(() => {
      cy.get('[data-cy=registration-button]').click();
    });
    cy.get('[data-cy=subscription-plan]').first().click();
    cy.get('[data-cy=registration-form]').within(() => {
      cy.get('[data-cy=registration-first-name]').type('Bob');
      cy.get('[data-cy=registration-last-name]').type('Kramer');
      cy.get('[data-cy=registration-email]').type('user@mail.com');
      cy.get('[data-cy=registration-password]').type('password');
      cy.get('[data-cy=registration-confirmation-password]').type('password');
    });
    cy.wait(1000);

    cy.get('[data-cy=card-details]').within(() => {
      cy.get('iframe[name^="__privateStripeFrame"]').then(($iframe) => {
        const $body = $iframe.contents().find('body');
        cy.wrap($body)
          .find('input[name="cardnumber"]')
          .type('4242424242424242', { delay: 50 });
      });
    });
    cy.get('[data-cy=card-details]').within(() => {
      cy.get('iframe[name^="__privateStripeFrame"]').then(($iframe) => {
        const $body = $iframe.contents().find('body');
        cy.wrap($body)
          .find('input[name="exp-date"]')
          .type('0424', { delay: 50 });
      });
    });
    cy.get('[data-cy=card-details]').within(() => {
      cy.get('iframe[name^="__privateStripeFrame"]').then(($iframe) => {
        const $body = $iframe.contents().find('body');
        cy.wrap($body).find('input[name="cvc"]').type('424', { delay: 50 });
      });
    });
    cy.get('[data-cy=card-details]').within(() => {
      cy.get('iframe[name^="__privateStripeFrame"]').then(($iframe) => {
        const $body = $iframe.contents().find('body');
        cy.wrap($body)
          .find('input[name="postal"]')
          .type('12345', { delay: 50 });
      });
    });
  });

  describe('user is able to register an account', () => {
    beforeEach(() => {
      cy.intercept(
        'POST',
        'https://fakest-newzz.herokuapp.com/api/subscriptions',
        { paid: 'true', message: 'Thank you for subscribing' }
      );
      cy.intercept('POST', 'https://fakest-newzz.herokuapp.com/api/auth', {
        fixture: 'registration.json',
      });
    });
    it('is expected to show registration form', () => {
      cy.get('[data-cy=registration-submit]').click();
      cy.get('[data-cy=authentication-popup]').within(() => {
        cy.get('[data-cy=success-message]').should(
          'contain',
          'Thank you for subscribing, Bob!'
        );
        cy.get('[data-cy=redirect-message]').should(
          'contain',
          'Loading your profile..'
        );
      });
      cy.wait(5000);
      cy.url('/');
      cy.wait(1000);
    });
  });
  describe('unsuccessfully with faulty registration info', () => {
    beforeEach(() => {
      cy.intercept('POST', 'https://fakest-newzz.herokuapp.com/api/auth', {
        statusCode: 422,
      });
    });
    it('is expected to show an error message', () => {
      cy.get('[data-cy=registration-submit]').click();
      cy.get('[data-cy=popup-message]').should(
        'contain',
        'Server is unable to process your request, please try again.'
      );
    });
  });

  describe('unsuccessfully with faulty subcription request', () => {
    beforeEach(() => {
      cy.intercept('POST', 'https://fakest-newzz.herokuapp.com/api/auth', {
        statusCode: 400,
      });
    });

    it('is expected to show an error message', () => {
      cy.get('[data-cy=registration-submit]').click();
      cy.get('[data-cy=popup-message]').should(
        'contain',
        "Payment didn't go through, please try again."
      );
    });
  });
});
