describe('User is able to read full article on article card', () => {

  describe('Successfully', () => {
    beforeEach(() => {
      cy.visit('/');
      cy.intercept('GET', 'https://fake-newzzzz.herokuapp.com/api/articles/3', {fixture: 'specificArticle.json'})
      cy.get('[data-cy=article-card-1]').click();
    })
    
    it('is expected to show specifc article', () => {
      cy.get('[data-cy=article-title]').should('contain', 'Whatever');
      cy.get('[data-cy=article-body]').should('contain','text');
      cy.get('[data-cy=article-date]').should('contain', '2021-05-13');
      cy.get('[data-cy=article-category]').should('contain', 'Illuminati');
      cy.get('[data-cy=article-author]').should('contain','Mr. Fake');
    });
  })
  
  
})
