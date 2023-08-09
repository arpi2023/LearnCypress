import data from "../fixtures/AddJobTitle.json"
import login from  "../Pages/login.po"
import dashobj  from "../Pages/dashboard.po"
import jobtitleobj from "../Pages/addjobtitle.po"
describe('Job Title', () => {
    it('Add Job Title ', () => {
      cy.visit('/web/index.php/auth/login')//Launch the application
      cy.get(login.usernameInput()).type("Admin")//enter username
      cy.get(login.passwordInput()).type("admin123")//enter password
      cy.get(login.loginbutton()).click()//click on login button
      cy.contains(dashobj.dashboardassert()).should("be.visible")//Verification point Dashboard should be visible
      cy.contains(jobtitleobj.clickOnAdmin()).click()//click on Admin module
      //cy.get("span[class='oxd-topbar-body-nav-tab-item']").click()//Click on Job
      cy.contains(jobtitleobj.clickOnJob()).click()
      //cy.get("a[class='oxd-topbar-body-nav-tab-link']").click()//Click on Job Title
      cy.contains(jobtitleobj.clickOnJobTitle()).click()
      cy.get(jobtitleobj.clickOnAddJobTitle()).click()//Click on Add Job title button
      let r = (Math.random() + 1).toString(36).substring(7);
      cy.get(jobtitleobj.typeJobTitle()).last().type(data.jobtitle + r)//Type the Job Title name which needs to be added
      cy.get(jobtitleobj.typeJobDescription()).type(data.jobdescription)//Enter Job description
      cy.get(jobtitleobj.clickOnSaveButton()).click()//Click on save button
      cy.contains(jobtitleobj.messageSave()).should("be.visible")//User must get the success message
    })

    
  })