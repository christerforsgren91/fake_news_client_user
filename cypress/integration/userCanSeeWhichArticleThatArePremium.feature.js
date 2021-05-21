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
      cy.get('[data-cy=login-button]').click();
      cy.get('[data-cy=login-form]').within(() => {
        cy.get('[data-cy=login-email]').type('user@mail.com');
        cy.get('[data-cy=login-password]').type('password');
        cy.get('[data-cy=login-submit]').click();
      });
    });

    it('user can see which articles are premium ', () => {
      cy.get('[data-cy=article]')
        .first()
        .within(() => {
          cy.get('[data-cy=premium-label]').should('be.visible');
        });
    });

    it('subscribed users can reade the article', () => {
      cy.get('[data-cy=article]').first().click();
      cy.get('[data-cy=article-container]').within(() => {
        cy.get('[data-cy=article-title]').should(
          'contain',
          'New Year 2020: 10 Moments This Decade That Made Us Say, "Wait, What?"'
        );
      });
    });
  });

  // describe('unsuccessfully', () => {
  //   it("visitor can't reade premium articles", () => {
  //     cy.get('[data-cy=article-card-1]').click();
  //   });
  // });
});
