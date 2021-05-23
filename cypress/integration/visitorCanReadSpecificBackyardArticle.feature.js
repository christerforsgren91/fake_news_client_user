describe('visitor can read specific Articles', () => {
  beforeEach(() => {
    cy.intercept(
      'GET',
      'https://fakest-newzz.herokuapp.com/api/backyard/?lat=55.7842&lon=12.4518',
      {
        fixture: 'backyardArticles.json',
      }
    );
    cy.intercept('GET', 'https://fakest-newzz.herokuapp.com/api/backyard/1', {
      fixture: 'specificBackyardArticle.json',
    });
    cy.visit('/backyard', {
      onBeforeLoad(window) {
        const stubLocation = {
          coords: {
            latitude: 55.7842,
            longitude: 12.4518,
          },
        };
        cy.stub(window.navigator.geolocation, 'getCurrentPosition').callsFake(
          (callback) => {
            return callback(stubLocation);
          }
        );
      },
    });
    cy.get('[data-cy=view-backyard-article-btn]').first().click();
  });
  it('is expected to show specific article', () => {
    cy.get('[data-cy=article-container]').within(() => {
      cy.get('[data-cy=title]').should('contain', 'Something');
      cy.get('[data-cy=body]').should(
        'include.text',
        'Science gets a lot of respect these days.'
      );
      cy.get('[data-cy=date]').should('contain', '2021-05-13, 20:03');
      cy.get('[data-cy=theme]').should('contain', 'My cat is spying on me');
      cy.get('[data-cy=author]').should('contain', 'Bob Kramer');
    });
  });
});
