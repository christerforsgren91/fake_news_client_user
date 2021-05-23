describe('Only subscribers can use rating functionality', () => {
  beforeEach(() => {
    cy.intercept('GET', 'https://fakest-newzz.herokuapp.com/api/articles', {
      fixture: 'articles.json',
    });
    cy.intercept('GET', 'https://fakest-newzz.herokuapp.com/api/articles/4', {
      fixture: 'specificArticle.json',
    });
    cy.intercept('POST', 'https://api.stripe.com/v1/tokens', { id: '1304124' });
    cy.intercept(
      'POST',
      'https://fakest-newzz.herokuapp.com/api/subscriptions',
      { paid: 'true', message: 'Thank you for subscribing' }
    );
    cy.intercept('POST', 'https://fakest-newzz.herokuapp.com/api/auth', {
      fixture: 'registration.json',
    });
    cy.visit('/');
  });

  describe('Successfully', () => {
    beforeEach(() => {
      cy.intercept('POST', 'https://fakest-newzz.herokuapp.com/api/ratings', {
        statusCode: 201,
      });
    });

    it('is expected to restrict non-subscribers', () => {
      cy.visit('/articles/4');
      cy.get('[data-cy=article-container]').within(() => {
        cy.get('[data-cy=article-rating]').should('contain', '3.7');
        cy.get('[data-cy=article-rating-button]').find('i').eq(4).click();
      });
      cy.get('#rating-message').should(
        'contain',
        'You have to subscribe to be able to rate'
      );
    });

    it('is expected to allow subscribers to rate', () => {
      cy.get('[data-cy=login-button]').click();
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
      cy.get('[data-cy=registration-submit]').click();
      cy.wait(5000);
      cy.get('[data-cy=article-card-2]').click();
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
      cy.intercept(
        'POST',
        'https://fakest-newzz.herokuapp.com/api/auth/sign_in',
        {
          fixture: 'registration.json',
        }
      );
      cy.intercept('POST', 'https://fakest-newzz.herokuapp.com/api/ratings', {
        statusCode: 500,
      });
    });

    it('is expected to display an error message', () => {
      cy.get('[data-cy=login-button]').click();
      cy.get('[data-cy=login-form]').within(() => {
        cy.get('[data-cy=login-email]').type('user@mail.com');
        cy.get('[data-cy=login-password]').type('password');
        cy.get('[data-cy=login-submit]').click();
      });
      cy.wait(3000);
      cy.get('[data-cy=article-card-2]').click();
      cy.get('[data-cy=article-rating-button]').find('i').eq(4).click();
      cy.get('[data-cy=popup-message]').should(
        'contain',
        'Servers are currently not responding, Please try again later'
      );
      cy.get('#rating-message').should(
        'contain',
        'Sorry your vote was not registered'
      );
    });
  });
});
