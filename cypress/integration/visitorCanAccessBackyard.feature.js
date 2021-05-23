describe('visitor can access Backyard site', () => {
  beforeEach(() => {
    cy.intercept('GET', 'https://fakest-newzz.herokuapp.com/api/articles', {
      fixture: 'articles.json',
    });
  });

  describe('successfully access backyard', () => {
    beforeEach(() => {
      cy.visit('/', {
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
      cy.intercept(
        'GET',
        'https://fakest-newzz.herokuapp.com/api/backyards/?lat=55.7842&lon=12.4518',
        {
          fixture: 'backyard_articles.json',
        }
      );
      cy.get('[data-cy=navbar]').within(() => {
        cy.get('[data-cy=backyard-tab]').click();
      });
    });

    it('is expected to send user to backyard', () => {
      cy.url().should('include', '/backyard');
    });

    it('is expected to display the country', () => {
      cy.get('[data-cy=backyard-header]').should(
        'contain',
        'Backyard Conspiracies from Denmark'
      );
    });

    it('is expected to show the list of articles', () => {
      cy.get('[data-cy=backyard-article]').should('have.length', 6);
    });

    it('is expected to show the first article', () => {
      cy.get('[data-cy=backyard-article]')
        .first()
        .within(() => {
          cy.get('[data-cy=title]').should('contain', 'Something');
          cy.get('[data-cy=theme]').should('contain', 'My cat is spying on me');
          cy.get('[data-cy=date]').should('contain', '2021-05-19, 15:10');
          cy.get('[data-cy=author]').should('contain', 'Bob Kramer');
          cy.get('[data-cy=view-backyard-article-btn]').should('be.visible');
        });
    });
  });

  describe('Unsuccessfully with no articles in that location', () => {
    beforeEach(() => {
      cy.visit('/', {
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
      cy.intercept('GET', 'https://fakest-newzz.herokuapp.com/api/backyards/?lat=55.7842&lon=12.4518', {
        backyard_articles: [],
      });
      cy.get('[data-cy=navbar]').within(() => {
        cy.get('[data-cy=backyard-tab]').click();
      });
    });

    it('is expected to show an message if there are no articles', () => {
      cy.get('[data-cy=popup-message]').should(
        'contain',
        'There are no articles available in your area'
      );
    });
  });

  describe('Unsuccessfully not allowing location', () => {
    beforeEach(() => {
      cy.visit('/', {
        onBeforeLoad(window) {
          const stubLocation = {
            coords: null,
          };
          cy.stub(window.navigator.geolocation, 'getCurrentPosition').callsFake(
            (callback) => {
              return callback(stubLocation);
            }
          );
        },
      });
      cy.intercept('GET', 'https://fakest-newzz.herokuapp.com/api/backyards', {
        fixture: 'backyard_articles.json',
      });
      cy.get('[data-cy=navbar]').within(() => {
        cy.get('[data-cy=backyard-tab]').click();
      });
    });
    it('is expected to show error message', () => {
      cy.get('[data-cy=popup-message]').should(
        'contain',
        'Please allow your location to see the backyard articles.'
      );
    });
  });
});
