describe('Demo of force true', () => {
    it('Demo test for force true', () => {
      cy.visit('https://www.cypress.io/')
      cy.contains('Installing Cypress').click({force: true})
      
    })
  })