describe('visitor can see a list of comments under article', () => {
  beforeEach(() => {
    cy.intercept('GET', 'https://fakest-newzz.herokuapp.com/api/articles/?**', {
      fixture: 'articles.json',
    });
  });
  describe('Successfully', () => {
    beforeEach(() => {
      cy.intercept('GET', 'https://fakest-newzz.herokuapp.com/api/articles/3', {
        fixture: 'specificArticleWithComments.json',
      });
      cy.visit('/');
      cy.get('[data-cy=article-card-1]').click();
    });

    it('is expected to show comment section under the article', () => {
      cy.get('[data-cy=comment-section]').within(() => {
        cy.get('[data-cy=comment]').should('have.length', 5);
        cy.get('[data-cy=comment]')
          .first()
          .within(() => {
            cy.get('[data-cy=user]').should('contain', 'Bobo');
            cy.get('[data-cy=date]').should('contain', '2021-05-26 15:13');
            cy.get('[data-cy=body]').should(
              'contain',
              'Cannot belive that is happening'
            );
          });
      });
    });
  });

  describe('Unsuccessfully, article does not have any comments', () => {
    beforeEach(() => {
      cy.intercept('GET', 'https://fakest-newzz.herokuapp.com/api/articles/3', {
        fixture: 'specificArticle.json',
      });
      cy.visit('/');
      cy.get('[data-cy=article-card-1]').click();
    });
    it('is expected to show no comments message ', () => {
      cy.get('[data-cy=comment-section]').within(() => {
        cy.get('[data-cy=comment]').should('not.exist');
        cy.get('[data-cy=no-comments-message]').should(
          'contain',
          'No comments yet.'
        );
      });
    });
  });
});
