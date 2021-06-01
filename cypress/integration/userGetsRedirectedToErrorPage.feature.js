describe('user gets redirected to error page', () => {
  beforeEach(() => {
     cy.visit('/')
  })  

  it('is expected to redirect user to error page', () => {
    cy.visit('/arti')
    cy.get('[data-cy=error-image]').should('exist')
  });
});
  
  
