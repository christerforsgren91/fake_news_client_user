describe('subscriber can write backyard articles', () => {
  beforeEach(() => {
    cy.intercept('POST', 'https://fakest-newzz.herokuapp.com/api/backyards', {
      statusCode: 200,
    });
    cy.intercept(
      'GET',
      'https://fakest-newzz.herokuapp.com/api/backyards/?lat=55.7842&lon=12.4518',
      {
        fixture: 'backyard_articles.json',
      }
    );
  });

  describe('successfully', () => {
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
      cy.get('[data-cy=navbar]').within(() => {
        cy.get('[data-cy=backyard-tab]').click();
      });
      cy.window().its('store').invoke('dispatch', {
        type: 'AUTHENTICATE',
        payload: 'Welcome back Bob!',
      });
    });

    it('is expected to create new backyard article on submit', () => {
      cy.get('[data-cy=create-backyard-article-btn]').click();
      cy.get('[data-cy=create-backyard-article-modal]').within(() => {
        cy.get('[data-cy=header]').should('contain', 'Create Backyard Article');
        cy.get('[data-cy=title]').type('My can is hunting me');
        cy.get('[data-cy=theme]').type('My biggest mistake');
        cy.get('[data-cy=body]').type(
          "My cat was contacted by CIA to hunt me down! I knew that I had to buy those tinfoil hats for cats but didn't do it. Big mistake bros..."
        );
        cy.get('[data-cy=submit]').click();
      });
      cy.get('[data-cy=popup-message]').should(
        'contain',
        'Your backyard article was published!'
      );
      cy.wait(1000);
    });
  });

  describe('unsuccessfully', () => {
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
      cy.get('[data-cy=navbar]').within(() => {
        cy.get('[data-cy=backyard-tab]').click();
      });
    });
    describe('not a subscriber', () => {
      it('is expected not to show create backyard article button', () => {
        cy.get('[data-cy=create-backyard-article-btn]').should('not.exist');
      });
    });

    describe('with error', () => {
      beforeEach(() => {
        cy.intercept(
          'POST',
          'https://fakest-newzz.herokuapp.com/api/backyards',
          {
            statusCode: 422,
          }
        );
        cy.window().its('store').invoke('dispatch', {
          type: 'AUTHENTICATE',
          payload: 'Welcome back Bob!',
        });
      });

      it('is expected to create new backyard article on submit', () => {
        cy.get('[data-cy=create-backyard-article-btn]').click();
        cy.get('[data-cy=create-backyard-article-modal]').within(() => {
          cy.get('[data-cy=header]').should(
            'contain',
            'Create Backyard Article'
          );
          cy.get('[data-cy=title]').type('My can is hunting me');
          cy.get('[data-cy=theme]').type('My biggest mistake');
          cy.get('[data-cy=body]').type(
            "My cat was contacted by CIA to hunt me down! I knew that I had to buy those tinfoil hats for cats but didn't do it. Big mistake bros..."
          );
          cy.get('[data-cy=submit]').click();
        });
        cy.wait(2000)
        cy.get('[data-cy=popup-message]').should(
          'contain',
          'Server is unable to process your request, please try again.'
        );
      });
    });
  });
});

describe('unsuccessfully with no geolocation', () => {
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
    cy.window().its('store').invoke('dispatch', {
      type: 'AUTHENTICATE',
      payload: 'Welcome back Bob!',
    });
    cy.get('[data-cy=navbar]').within(() => {
      cy.get('[data-cy=backyard-tab]').click();
    });
  });

  it('is expected not to show create backyard article button', () => {
    cy.get('[data-cy=create-backyard-article-btn]').should('not.exist');
    cy.get('[data-cy=popup-message]').should(
      'contain',
      'Please allow your location to see the backyard articles.'
    );
  });
});
