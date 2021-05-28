describe('Subscriber can comment on article', () => {
  beforeEach(() => {
    cy.intercept('GET', 'https://fakest-newzz.herokuapp.com/api/articles/', {
      fixture: 'articles.json',
    });
    cy.intercept('GET', 'https://fakest-newzz.herokuapp.com/api/articles/3', {
      fixture: 'specificArticleWithComments.json',
    });
    cy.visit('/');
    cy.get('[data-cy=article-card-1]').click();
  });

  describe('Successfully', () => {
    beforeEach(() => {
      cy.intercept('POST', 'https://fakest-newzz.herokuapp.com/api/articles/3/comments', {
        statusCode: 200,
      });
      cy.window().its('store').invoke('dispatch', {
        type: 'AUTHENTICATE',
        payload: 'Welcome back Bob!',
      });
    });

    it('writes a comment', () => {
      cy.get('[data-cy=comment-input]').type('jabba jabba booo');
      cy.get('[data-cy=clear-btn]').click();
      cy.get('[data-cy=comment-input]').type('STFU U BLOODY ROUND EARTHER');
      cy.get('[data-cy=comment-btn]').click();
      cy.get('[data-cy=popup-message]').should(
        'contain',
        'Your comment has been published'
      );
    });
  });

  describe('Unsuccessfully as a Visitor', () => {
    beforeEach(() => {
      cy.intercept('POST', 'https://fakest-newzz.herokuapp.com/api/comments', {
        statusCode: 401,
      });
    });

    it('is expected to show a message', () => {
      cy.get('[data-cy=comment-input]').type(
        'Oh what i hate sites that i need to sign in to, to be able to write comments'
      );
      cy.get('[data-cy=comment-btn]').click();
      cy.get('[data-cy=message]').should(
        'contain',
        'Please subscribe to comment'
      );
    });
  });
});
