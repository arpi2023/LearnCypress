class jobTitle{
    clickOnAdmin(){
        return "Admin"
    }
    clickOnJob(){
        return "Job"
    }
    clickOnJobTitle(){
        return "Job Titles"
    }
    clickOnAddJobTitle(){
      return "button[class='oxd-button oxd-button--medium oxd-button--secondary']"
    
    }

    typeJobTitle(){
        return 'input[class="oxd-input oxd-input--active"]'
    }

    typeJobDescription(){
        return 'textarea[placeholder="Type description here"]'
    }

    clickOnSaveButton()
    {
        return 'button[class="oxd-button oxd-button--medium oxd-button--secondary orangehrm-left-space"]'
    }

    messageSave(){
        return "Successfully Saved"
    }
}
const  jobtitleobj = new jobTitle
export default jobtitleobj