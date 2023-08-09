class loginPage{
    orangeHRMLogo(){
        return 'img[alt="company-branding"]'
    }

    usernameInput(){
        return "input[name='username']"
    }

    passwordInput(){
        return "input[name='password']"
    }
    loginbutton(){
        return "button[type='submit']"
    }
    loginwithcreds(username,password)
    {
        cy.get(this.usernameInput()).type(username)//enter username
        cy.get(this.passwordInput()).type(password)//enter password
        cy.get(this.loginbutton()).click()//click on login button
    }
}

const login = new loginPage()
export default login