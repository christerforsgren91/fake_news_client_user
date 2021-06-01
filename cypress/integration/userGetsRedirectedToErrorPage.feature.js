describe('user gets redirected to error page', () => {
  it('is expected to redirect user to error page', () => {
    cy.visit('/articles/1237')
    cy.get('[data-cy=error-image]').should('exist')
  })
})
