describe('template spec', () => {
  it('passes', () => {
    cy.visit('https://www.google.com')
    cy.visit(Cypress.env("url2"))
    //cy.get('#APjFqb').type("Books{enter}")
  })
})