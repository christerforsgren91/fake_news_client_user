describe('User is able to read full article on article card', () => {
  describe('Successfully', () => {
    beforeEach(() => {
      cy.intercept('GET', 'https://fakest-newzz.herokuapp.com/api/articles/', {
        fixture: 'articles.json',
      });
      cy.intercept(
        'GET',
        'https://fakest-newzz.herokuapp.com/api/articles/3',
        { fixture: 'specificArticle.json' }
      );
      cy.visit('/');
      cy.get('[data-cy=article-card-1]').click();
    });

    it('is expected to show specific article', () => {
      cy.get('[data-cy=article-container]').within(() => {
        cy.get('[data-cy=article-title]').should(
          'contain',
          'New Year 2020: 10 Moments This Decade That Made Us Say, "Wait, What?"'
        );
        cy.get('[data-cy=article-body]').should(
          'include.text',
          'Science gets a lot of respect'
        );
        cy.get('[data-cy=article-image]').should('have.attr', 'src', 'https://store-images.s-microsoft.com/image/apps.41418.13510798886375925.7fdd10df-25c0-4a5f-90ce-63205d1f83c4.d5a00a77-17c9-433d-a71d-8f68eef63ed6?mode=scale&q=90&h=1080&w=1920');
        cy.get('[data-cy=article-date]').should('contain', '2021-05-13');
        cy.get('[data-cy=article-category]').should('contain', 'Illuminati');
        cy.get('[data-cy=article-author]').should('contain', 'Mr. Fake');
      });
      cy.get('[data-cy=home-tab]').click();
      cy.get('[data-cy=breaking-news]').should('exist');
    });
  });
});
