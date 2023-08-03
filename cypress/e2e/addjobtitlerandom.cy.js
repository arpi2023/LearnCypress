import data from "../fixtures/AddJobTitle.json"
describe('Job Title', () => {
    it('Add Job Title ', () => {
      cy.visit('/web/index.php/auth/login')//Launch the application
      cy.get('input[name = "username"]').type("Admin")//enter username
      cy.get('input[name="password"]').type("admin123")//enter password
      cy.get('button[type="submit"]').click()//click on login button
      cy.contains("Dashboard").should("be.visible")//Verification point Dashboard should be visible
      cy.contains("Admin").click()//click on Admin module
      //cy.get("span[class='oxd-topbar-body-nav-tab-item']").click()//Click on Job
      cy.contains("Job").click()
      //cy.get("a[class='oxd-topbar-body-nav-tab-link']").click()//Click on Job Title
      cy.contains("Job Titles").click()
      cy.get("button[class='oxd-button oxd-button--medium oxd-button--secondary']").click()//Click on Add Job title button
      let r = (Math.random() + 1).toString(36).substring(7);
      cy.get('input[class="oxd-input oxd-input--active"]').last().type(data.jobtitle+ r)//Type the Job Title name which needs to be added
      cy.get('textarea[placeholder="Type description here"]').type(data.jobdescription)//Enter Job description
      cy.get('button[class="oxd-button oxd-button--medium oxd-button--secondary orangehrm-left-space"]').click()//Click on save button
      cy.contains("Successfully Saved").should("be.visible")//User must get the success message
    })

    
  })