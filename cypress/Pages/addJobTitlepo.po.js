class AddJobTitle{
    adminMenu(){
        return "Admin"
    }
    jobSubMenu(){
        return "Job"
    }
    jobtitlesubmenu(){
        return "Job Titles"
    }
    addJobTitlemenu(){
        return "button[class='oxd-button oxd-button--medium oxd-button--secondary']"
    }
    jobTitleName(){
        return 'input[class="oxd-input oxd-input--active"]'
    }
    jobDescription(){
        return 'textarea[placeholder="Type description here"]'
    }
    saveButton(){
        return 'button[class="oxd-button oxd-button--medium oxd-button--secondary orangehrm-left-space"]'
    }
    successMessage(){
        return "Successfully Saved"
    }
  
    CharacterlimitMessage(){
        return "Should not exceed 100 characters"
    }
    addJobTitleinAdmin(jobtitle,jobDescription)
    {
      cy.get(this.jobTitleName()).last().type(jobtitle)//Type the Job Title name which needs to be added
      cy.get(this.jobDescription()).type(jobDescription)//Enter Job description
      cy.get(this.saveButton()).click()//Click on save button
      cy.contains(this.successMessage()).should("be.visible")
    }
    addJobTitleex(jobtitleex,jobDescription){
        cy.get(this.jobTitleName()).last().type(jobtitleex)//Type the Job Title name which needs to be added
      cy.get(this.jobDescription()).type(jobDescription)//Enter Job description
      cy.get(this.saveButton()).click()//Click on save button
      cy.contains(this.CharacterlimitMessage()).should("be.visible")

    }
    
}
const addJobTitle = new AddJobTitle()
export default addJobTitle