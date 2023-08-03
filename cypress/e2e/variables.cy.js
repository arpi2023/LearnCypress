describe('template spec', () => {
    var username = "Admin"
    var password = "admin123"
    it('Verify Login with Valid input details', () => {
        cy.visit('/web/index.php/auth/login')
        cy.get('#app > div.orangehrm-login-layout > div > div.orangehrm-login-container > div > div.orangehrm-login-slot > div.orangehrm-login-form > form > div:nth-child(2) > div > div:nth-child(2) > input').type(username)
        cy.get ('input[name="password"]').type(password)
        cy.get('#app > div.orangehrm-login-layout > div > div.orangehrm-login-container > div > div.orangehrm-login-slot > div.orangehrm-login-form > form > div.oxd-form-actions.orangehrm-login-action > button').click()
        cy.contains("Dashboard").should("be.visible")
    
      })
  })