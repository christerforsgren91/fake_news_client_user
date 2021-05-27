describe('Subscriber can comment on article', () => {
  beforeEach(() => {
    cy.intercept('GET', 'https://fakest-newzz.herokuapp.com/api/articles/', {
      fixture: 'articles.json',
    });
    cy.intercept('GET', 'https://fakest-newzz.herokuapp.com/api/articles/3', {
      fixture: 'specificArticleWithComments.json',
    });
    cy.visit('/');
    cy.window().its('store').invoke('dispatch', {
      type: 'AUTHENTICATE',
      payload: 'Welcome back Bob!',
    });
    cy.get('[data-cy=article-card-1]').click();
  });

  describe('Successfully', () => {
    it('writes a comment', () => {
      cy.get('[data-cy=comment-input]').type('Börje bre käft äter en get');
      cy.get('[data-cy=clear-btn]').should('exist')
      cy.get('[data-cy=comment-btn]').click();
    });
    it('is expected to show comment in comment section under the article', () => {
      cy.get('[data-cy=comment-section]').within(() => {
        cy.get('[data-cy=comment]').should('have.length', 6);
        cy.get('[data-cy=comment]')
          .first()
          .within(() => {
            cy.get('[data-cy=user]').should('contain', 'Bob');
            cy.get('[data-cy=date]').should('contain', '2021-05-27');
            cy.get('[data-cy=body]').should(
              'contain',
              'Börje bre käft äter en get'
            );
          });
      });
    });
  });
});
