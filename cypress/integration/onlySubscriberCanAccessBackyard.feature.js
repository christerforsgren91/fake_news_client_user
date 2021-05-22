describe('subscriber can access Backyard site', () => {
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

  describe('successfully access backyard', () => {
    beforeEach(() => {
      cy.intercept('GET', 'https://fakest-newzz.herokuapp.com/api/backyard', {
        fixture: 'backyardArticles.json',
      });
    });

    it('is expected to display a backyard tab in the nav bar', () => {
      cy.get('[data-cy=navbar]').within(() => {
        cy.get('[data-cy=backyard-tab]').click()
      })
    });
    it('is expected to send user to backyard', () => {
      cy.url().should('include', '/backyard')
    });
  });
});
