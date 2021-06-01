describe('user is able to login', () => {
  describe('Successfully', () => {
    beforeEach(() => {
      cy.intercept(
        'POST',
        'https://fakest-newzz.herokuapp.com/api/auth/sign_in',
        {
          fixture: 'registration.json',
        }
      )

      cy.visit('/')
    })
    it('is expected to show login form', () => {
      cy.get('[data-cy=login-button]').click()
      cy.url('/login')
      cy.get('[data-cy=login-form]').within(() => {
        cy.get('[data-cy=login-email]').type('user@mail.com')
        cy.get('[data-cy=login-password]').type('password')
        cy.get('[data-cy=login-submit]').click()
      })
      cy.get('[data-cy=authentication-popup]').within(() => {
        cy.get('[data-cy=success-message]').should(
          'contain',
          'Welcome back, Bob!'
        )
        cy.get('[data-cy=redirect-message]').should(
          'contain',
          'Loading your profile..'
        )
      })
      cy.wait(3000)
      cy.url('/')
      cy.wait(1000)
    })
  })
  describe('Unsuccessfully', () => {
    beforeEach(() => {
      cy.intercept(
        'POST',
        'https://fakest-newzz.herokuapp.com/api/auth/sign_in',
        {
          statusCode: 406,
          body: { errors: ['User does not exist, please try again.'] },
        }
      )
      cy.visit('/')
    })
    it('is expected to display an error message', () => {
      cy.get('[data-cy=login-button]').click()
      cy.get('[data-cy=login-form]').within(() => {
        cy.get('[data-cy=login-email]').type('user@mail.com')
        cy.get('[data-cy=login-password]').type('assword')
        cy.get('[data-cy=login-submit]').click()
      })
      cy.get('[data-cy=popup-message]').should(
        'contain',
        'User does not exist, please try again.'
      )
    })
  })
})
