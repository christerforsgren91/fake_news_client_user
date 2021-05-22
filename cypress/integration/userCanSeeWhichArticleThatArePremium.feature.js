describe('user can see which articles that are premium', () => {
  beforeEach(() => {
    cy.intercept('GET', 'https://fakest-newzz.herokuapp.com/api/articles', {
      fixture: 'articles.json',
    });
    cy.intercept(
      'POST',
      'https://fakest-newzz.herokuapp.com/api/auth/sign_in',
      {
        fixture: 'registration.json',
      }
    );
    cy.visit('/');
  });

  describe('successfully ', () => {
    beforeEach(() => {
      cy.intercept('GET', 'https://fakest-newzz.herokuapp.com/api/articles/2', {
        fixture: 'specificArticle.json',
      });
    });

    it('is expected to display a premium tag', () => {
      cy.get('[data-cy=article]')
        .first()
        .within(() => {
          cy.get('[data-cy=premium-label]').should('be.visible');
        });
    });

    it('is expected to allow subscribers to read the article', () => {
      cy.get('[data-cy=login-button]').click();
      cy.get('[data-cy=login-form]').within(() => {
        cy.get('[data-cy=login-email]').type('user@mail.com');
        cy.get('[data-cy=login-password]').type('password');
        cy.get('[data-cy=login-submit]').click();
      });
      cy.wait(1000);
      cy.get('[data-cy=article]').first().click();
      cy.get('[data-cy=article-container]').within(() => {
        cy.get('[data-cy=article-title]').should(
          'contain',
          'New Year 2020: 10 Moments This Decade That Made Us Say, "Wait, What?"'
        );
      });
    });
  });

  describe('Successfully unsuccessful', () => {
    beforeEach(() => {
      cy.visit('/');
      cy.get('[data-cy=article-card-0]').click();
    });
    it('is expected to send visitors to registration', () => {
      cy.url().should('include', '/registration')
    });
    it('is expected to show an informative message', () => {
      cy.get('[data-cy=subscribe-message]').should('contain', 'You tried to access a premium article, please subscribe')
    });
  });
});
