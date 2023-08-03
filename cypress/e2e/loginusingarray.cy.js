describe('Validate Login Functionality', () => {
    
    var logincred = ["Admin", "admin123", "dfnawkjfw", "dfnvjbsasfnawkjfw"];

 
     
 
     it('Verify Login with Valid input details', () => {
       cy.visit('/web/index.php/auth/login')
       cy.get('#app > div.orangehrm-login-layout > div > div.orangehrm-login-container > div > div.orangehrm-login-slot > div.orangehrm-login-form > form > div:nth-child(2) > div > div:nth-child(2) > input').type(logincred[0])
       cy.get ('input[name="password"]').type(logincred[1])
       cy.get('#app > div.orangehrm-login-layout > div > div.orangehrm-login-container > div > div.orangehrm-login-slot > div.orangehrm-login-form > form > div.oxd-form-actions.orangehrm-login-action > button').click()
       cy.contains("Dashboard").should("be.visible")
   
     })
     it('Verify Login with Valid username and invalid password', () => {
       cy.visit('/web/index.php/auth/login')
       cy.get('input[name="username"]').type(logincred[0])
       cy.get('#app > div.orangehrm-login-layout > div > div.orangehrm-login-container > div > div.orangehrm-login-slot > div.orangehrm-login-form > form > div:nth-child(3) > div > div:nth-child(2) > input').type(logincred[3])
       cy.get ('button[type="submit"]').click()
       cy.get('#app > div.orangehrm-login-layout > div > div.orangehrm-login-container > div > div.orangehrm-login-slot > div.orangehrm-login-form > div > div.oxd-alert.oxd-alert--error > div.oxd-alert-content.oxd-alert-content--error > p').should("be.visible")
     })
     it('Verify Login with invalid username and valid password', () => {
       cy.visit('/web/index.php/auth/login')
       cy.get('input[name="username"]').type(logincred[2])
       cy.get('input[name="password"]').type(logincred[1])
       cy.get('button[type="submit"]').click()
       cy.contains("Invalid credentials").should("be.visible")
     })
     it('Verify Login with invalid username and invalid password', () => {
       cy.visit('/web/index.php/auth/login')
       cy.get('input[name="username"]').type(logincred[2])
       cy.get('input[name="password"]').type(logincred[3])
       cy.get('button[type="submit"]').click()
       cy.get("p[class='oxd-text oxd-text--p oxd-alert-content-text']").should("be.visible")
     })
   })