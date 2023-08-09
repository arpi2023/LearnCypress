import login from "../Pages/login.po"
import dashobj from "../Pages/dashboard.po"
describe('Validate Login Functionality', () => {
    it('Verify Login with Valid input details', () => {
      cy.visit('/web/index.php/auth/login')
      cy.get(login.usernameInput()).type('Admin')
      cy.get (login.passwordInput()).type('admin123')
      cy.get(login.loginbutton()).click()
      cy.contains(dashobj.dashboardassert()).should("be.visible")
  
    })
    it('Verify Login with Valid username and invalid password', () => {
      cy.visit('/web/index.php/auth/login')
      cy.get('input[name="username"]').type("Admin")
      cy.get('#app > div.orangehrm-login-layout > div > div.orangehrm-login-container > div > div.orangehrm-login-slot > div.orangehrm-login-form > form > div:nth-child(3) > div > div:nth-child(2) > input').type("admin4123")
      cy.get ('button[type="submit"]').click()
      cy.get('#app > div.orangehrm-login-layout > div > div.orangehrm-login-container > div > div.orangehrm-login-slot > div.orangehrm-login-form > div > div.oxd-alert.oxd-alert--error > div.oxd-alert-content.oxd-alert-content--error > p').should("be.visible")
    })
    it('Verify Login with invalid username and valid password', () => {
      cy.visit('/web/index.php/auth/login')
      cy.get('input[name="username"]').type("ADMIN")
      cy.get('input[name="password"]').type("admin123")
      cy.get('button[type="submit"]').click()
      cy.contains("Invalid credentials").should("be.visible")
    })
    it('Verify Login with invalid username and invalid password', () => {
      cy.visit('/web/index.php/auth/login')
      cy.get('input[name="username"]').type("admihkjs")
      cy.get('input[name="password"]').type("admin1234")
      cy.get('button[type="submit"]').click()
      cy.get("p[class='oxd-text oxd-text--p oxd-alert-content-text']").should("be.visible")
    })
  })