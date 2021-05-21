describe('user can see which articles that are premium', () => {
  beforeEach(() => {
    cy.intercept('GET', 'https://fakest-newzz.herokuapp.com/api/articles', {
      fixture: 'articles.json',
    });
    cy.intercept('POST', 'https://api.stripe.com/v1/tokens', {
      id: '1304124',
    });
    cy.intercept(
      'POST',
      'https://fakest-newzz.herokuapp.com/api/subscriptions',
      { paid: 'true', message: 'Thank you for subscribing' }
    );
    cy.intercept('POST', 'https://fakest-newzz.herokuapp.com/api/auth', {
      fixture: 'registration.json',
    });
    cy.visit('/');
    cy.get('[data-cy=article-card-1]').within(() => {
      cy.get('[data-cy=premium-article]').should('contain', 'Premium');
    });
  });

  describe('successfully ', () => {
    beforeEach(() => {
      cy.intercept('GET', 'https://fakest-newzz.herokuapp.com/api/articles/4', {
        fixture: 'specificArticle.json',
      });
    });
    it('user can see which articles are premium ', () => {
    });

    it('subscribed users can reade the article', () => {
      cy.get('[data-cy=article-card-1]').click();
      cy.get('[data-cy=article-container]').within(() => {
        cy.get('[data-cy=article-title]').should(
          'contain',
          'New Year 2020: 10 Moments This Decade That Made Us Say, "Wait, What?"'
        );
      });
    });
  });

  describe('unsuccessfully', () => {
    it("visitor can't reade premium articles", () => {
      cy.get('[data-cy=article-card-1]').click();
    });
  });
});
