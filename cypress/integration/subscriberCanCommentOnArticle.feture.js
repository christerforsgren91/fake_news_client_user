describe('Subscriber can comment on article', () => {
  beforeEach(() => {
    cy.intercept('GET', 'https://fakest-newzz.herokuapp.com/api/articles/', {
      fixture: 'articles.json',
    });
    cy.intercept('GET', 'https://fakest-newzz.herokuapp.com/api/articles/3', {
      fixture: 'specificArticleWithComments.json',
    });
    cy.intercept('POST', 'https://fakest-newzz.herokuapp.com/api/comments', {
      statusCode: 200,
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
      cy.get('[data-cy=comment-input]').click();
      cy.get('[data-cy=comment-input]').type('jabba jabba booo');
      cy.get('[data-cy=clear-btn]').click()
      cy.get('[data-cy=comment-input]').type('STFU U BLOODY ROUND EARTHER');
      cy.get('[data-cy=comment-btn]').click();
      cy.get('[data-cy=popup-message]').should(
        'contain',
        'Your comment has been published'
      );
    });
  });

  // describe('Unsuccessfully', () => {
  //   cy.intercept('GET', 'https://fakest-newzz.herokuapp.com/api/articles/', {
  //     fixture: 'articles.json',
  //   });
  //   cy.intercept('GET', 'https://fakest-newzz.herokuapp.com/api/articles/3', {
  //     fixture: 'specificArticleWithComments.json',
  //   });
  //   cy.intercept('POST', 'https://fakest-newzz.herokuapp.com/api/comments', {
  //     statusCode: 200,
  //   });
  //   cy.visit('/');
  //   cy.window().its('store').invoke('dispatch', {
  //     type: 'AUTHENTICATE',
  //     payload: 'Welcome back Bob!',
  //   });
  //   cy.get('[data-cy=article-card-1]').click();
  // }); 
});
