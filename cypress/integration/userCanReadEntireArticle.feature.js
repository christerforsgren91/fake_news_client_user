describe('User is able to read full article on article card', () => {
  describe('Successfully', () => {
    beforeEach(() => {
      cy.visit('/');
      cy.intercept(
        'GET',
        'https://fake-newzzzzz.herokuapp.com/api/articles/3',
        { fixture: 'specificArticle.json' }
      );
      cy.intercept(
        'GET',
        'https://fake-newzzzzz.herokuapp.com/api/articles/',
        { fixture: 'articles.json' }
      );
      cy.get('[data-cy=article-card-0]').click();
    });

    it('is expected to show specific article', () => {
      cy.get('[data-cy=article-container]').within(() => {
        cy.get('[data-cy=article-title]').should(
          'contain',
          'New Year 2020: 10 Moments This Decade That Made Us Say, "Wait, What?"'
        );
        cy.get('[data-cy=article-body]').should('include.text', 'Science gets a lot of respect');
        cy.get('[data-cy=article-date]').should('contain', '2021-05-13');
        cy.get('[data-cy=article-category]').should('contain', 'Illuminati');
        cy.get('[data-cy=article-author]').should('contain', 'Mr. Fake');
      });
      cy.get('[data-cy=home-tab]').click()
      cy.get('[data-cy=breaking-news]').should('exist');
    });
  });
});
