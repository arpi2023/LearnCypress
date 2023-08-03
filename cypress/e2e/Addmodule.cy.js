import data from "../fixtures/Add.json"
describe('template spec', () => {
 
    it('Verify Adding Pay Grades', () => {
        cy.visit('/web/index.php/auth/login')
        cy.get('#app > div.orangehrm-login-layout > div > div.orangehrm-login-container > div > div.orangehrm-login-slot > div.orangehrm-login-form > form > div:nth-child(2) > div > div:nth-child(2) > input').type(data.username)
        cy.get ('input[name="password"]').type(data.password)
        cy.get('#app > div.orangehrm-login-layout > div > div.orangehrm-login-container > div > div.orangehrm-login-slot > div.orangehrm-login-form > form > div.oxd-form-actions.orangehrm-login-action > button').click()
        cy.contains("Dashboard").should("be.visible")
        cy.contains("Admin").click()
        cy.contains("Job").click()
        cy.contains("Pay Grades").click()
        cy.get('button[class="oxd-button oxd-button--medium oxd-button--secondary"]').click()
        let r = (Math.random() + 1).toString(36).substring(7);
        cy.get('input[class="oxd-input oxd-input--active"]').eq(1).type(data.PGName + r)
        cy.get('button[class="oxd-button oxd-button--medium oxd-button--secondary orangehrm-left-space"]').click()   
        cy.visit('/web/index.php/admin/viewPayGrades')
        cy.contains(data.PGName)
      
    })
     it('Verify Adding Employment Status', () => {
        cy.visit('/web/index.php/auth/login')
        cy.get('#app > div.orangehrm-login-layout > div > div.orangehrm-login-container > div > div.orangehrm-login-slot > div.orangehrm-login-form > form > div:nth-child(2) > div > div:nth-child(2) > input').type(data.username)
        cy.get ('input[name="password"]').type(data.password)
        cy.get('#app > div.orangehrm-login-layout > div > div.orangehrm-login-container > div > div.orangehrm-login-slot > div.orangehrm-login-form > form > div.oxd-form-actions.orangehrm-login-action > button').click()
        cy.contains("Dashboard").should("be.visible")
        cy.contains("Admin").click()
        cy.contains("Job").click()
        cy.contains("Employment Status").click()
        cy.get('button[class="oxd-button oxd-button--medium oxd-button--secondary"]').click()
        let r = (Math.random() + 1).toString(36).substring(7);
        cy.get('input[class="oxd-input oxd-input--active"]').eq(1).type(data.EmploymentStatus + r)
        cy.get('button[class="oxd-button oxd-button--medium oxd-button--secondary orangehrm-left-space"]').click()
        cy.contains("Successfully Saved").should('be.visible')
        
     })
     it('Verify Adding Job Categories', () => {
        cy.visit('/web/index.php/auth/login')
        cy.get('#app > div.orangehrm-login-layout > div > div.orangehrm-login-container > div > div.orangehrm-login-slot > div.orangehrm-login-form > form > div:nth-child(2) > div > div:nth-child(2) > input').type(data.username)
        cy.get ('input[name="password"]').type(data.password)
        cy.get('#app > div.orangehrm-login-layout > div > div.orangehrm-login-container > div > div.orangehrm-login-slot > div.orangehrm-login-form > form > div.oxd-form-actions.orangehrm-login-action > button').click()
        cy.contains("Dashboard").should("be.visible")
        cy.contains("Admin").click()
        cy.contains("Job").click()
        cy.contains("Job Categories").click()
        cy.get('button[class="oxd-button oxd-button--medium oxd-button--secondary"]').click()
        let r = (Math.random() + 1).toString(36).substring(7);
        cy.get('input[class="oxd-input oxd-input--active"]').eq(1).type(data.JobCategories + r)
        cy.get('button[class="oxd-button oxd-button--medium oxd-button--secondary orangehrm-left-space"]').click()
        cy.contains("Successfully Saved").should('be.visible')     
     })
     it('Verify Adding Work Shifts', () => {
        cy.visit('/web/index.php/auth/login')
        cy.get('#app > div.orangehrm-login-layout > div > div.orangehrm-login-container > div > div.orangehrm-login-slot > div.orangehrm-login-form > form > div:nth-child(2) > div > div:nth-child(2) > input').type(data.username)
        cy.get ('input[name="password"]').type(data.password)
        cy.get('#app > div.orangehrm-login-layout > div > div.orangehrm-login-container > div > div.orangehrm-login-slot > div.orangehrm-login-form > form > div.oxd-form-actions.orangehrm-login-action > button').click()
        cy.contains("Dashboard").should("be.visible")
        cy.contains("Admin").click()
        cy.contains("Job").click()
        cy.contains("Work Shifts").click()
        cy.get('button[class="oxd-button oxd-button--medium oxd-button--secondary"]').click()
        let r = (Math.random() + 1).toString(36).substring(7);
        cy.get('input[class="oxd-input oxd-input--active"]').eq(1).type(data.WorkShifts + r)
        cy.get('input[class="oxd-input oxd-input--active"]').eq(1).clear().type(data.Starttime)
        cy.get('input[class="oxd-input oxd-input--active"]').eq(2).clear().type(data.Endtime)
        cy.get('button[class="oxd-button oxd-button--medium oxd-button--secondary orangehrm-left-space"]').click()
        cy.contains("Successfully Saved").should('be.visible')  
     })
  })