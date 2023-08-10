import data from "../fixtures/AddJobTitle.json"

import logintestdata from "../fixtures/login.json"
import logindetails from "../Pages/login.po"
import dashboard from "../Pages/dashboard.po"
//import addjobtitle from "../Pages/addjobtitlepo.po"
import addJobTitle from "../Pages/addjobtitlepo.po"

describe('Job Title', () => {
    it('Add Job Title ', () => {
      cy.visit('/web/index.php/auth/login')//Launch the application
      logindetails.loginwithcreds(logintestdata.username, logintestdata.password)
      //login.loginwithcreds(logintestdata.username,logintestdata.password)
      cy.contains(dashboard.dashboardassert()).should("be.visible")//Verification point Dashboard should be visible
      cy.contains(addJobTitle.adminMenu()).click()//click on Admin module
      cy.contains(addJobTitle.jobSubMenu()).click()
      cy.contains(addJobTitle.jobtitlesubmenu()).click()
      cy.get(addJobTitle.addJobTitlemenu()).click()//Click on Add Job title button
      let r = (Math.random() + 1).toString(36).substring(7);
      addJobTitle.addJobTitleinAdmin(data.jobtitle + r,data.jobdescription)
    })
    it('Verify character limits for job field ', () => {
        cy.visit('/web/index.php/auth/login')//Launch the application
        //cy.get(login.usernameInput()).type("Admin")//enter username
        //cy.get(login.passwordInput()).type("admin123")//enter password
        //cy.get(login.loginbutton()).click()//click on login button
        logindetails.loginwithcreds(logintestdata.username,logintestdata.password)
        cy.contains(dashboard.dashboardassert()).should("be.visible")//Verification point Dashboard should be visible
        cy.contains(addJobTitle.adminMenu()).click()//click on Admin module
        //cy.get("span[class='oxd-topbar-body-nav-tab-item']").click()//Click on Job
        cy.contains(addJobTitle.jobSubMenu()).click()
        //cy.get("a[class='oxd-topbar-body-nav-tab-link']").click()//Click on Job Title
        cy.contains(addJobTitle.jobtitlesubmenu()).click()
        cy.get(addJobTitle.addJobTitlemenu()).click()//Click on Add Job title button
        let r = (Math.random() + 1).toString(36).substring(7);
        //  cy.get(addJobTitle.jobTitleName()).last().type(data.jobtitleex + r)//Type the Job Title name which needs to be added
        //  cy.get(addJobTitle.jobDescription()).type(data.jobdescription)//Enter Job description
        //  cy.get(addJobTitle.saveButton()).click()//Click on save button
        //  cy.contains(addJobTitle.CharacterlimitMessage()).should("be.visible")//User must get the success message
        addJobTitle.addJobTitleex(data.jobtitleex + r,data.jobdescription)
      })
  
    
  })
  