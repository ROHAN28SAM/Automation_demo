import LandingPage from "./landing-page"

class LoginPageSuccess extends LandingPage{
    // Locaters
    login_text = "body > div._2Sn47c > div > div > div > div > div._3oBhRa.col.col-2-5._4H6HH5 > span > span"
    email_field_text = 'input[class="_2IX_2- VJZDxU"]'
    password_field_text = 'input[class="_2IX_2- _3mctLh VJZDxU"]'
    login_button = 'button[class="_2KpZ6l _2HKlqd _3AWRsL"]'
    user_name_link = '#container > div > div._1kfTjk > div._1rH5Jn > div._2Xfa2_ > div:nth-child(3) > div > div > div > div'
    // logout_link = 'div[class="_3vhnxf"]'

    // Function to get locaters
    getLoginText(){
        return cy.get(this.login_text)
    }

    getEmailTextField(){
        return cy.get(this.email_field_text)
    }

    getPasswordTextField(){
        return cy.get(this.password_field_text)
    }

    getLoginButton(){
        return cy.get(this.login_button)
    }

    getUserNameLink(){
        return cy.get(this.user_name_link)
    }

    // getLogoutLink(){
    //     return cy.get(this.logout_link)
    // }

    // Method for user Successful Login
    check_successful_user_login(email,pass){
        this.getLoginLink().click()
        cy.log("Login Link was clicked successfully")
        // Verify Login Page is display with "Login" word
        this.getLoginText().should("be.visible")
        cy.log("Login Word was displayed on login page")

        // Verify Email/Phone text field is visible
        this.getEmailTextField().should("be.visible").should("be.enabled")
        cy.log("Email/Phone text field was displayed and enabled on login page")

        // Verify Password text field is visible
        this.getPasswordTextField().should("be.visible").should("be.enabled")
        cy.log("Password Text Field was displayed and enabled on login page")

        // Verify Email Text Field is clear and then type value
        // if(this.getEmailTextField().should("have.value","")){
        if(this.getEmailTextField().invoke("have.value","")){
            cy.log("Email Text Field was empty")
            // Enter Email/Mobile
            this.getEmailTextField().type(email)
            cy.log("Email/Mobile was entered on login page")
        }
        else{
            cy.log("Email Text Field was not empty")
            this.getEmailTextField().clear()
            cy.log("Email Text Field was cleared successfully")
            // Enter Email/Mobile
            this.getEmailTextField().type(email)
            cy.log("Email/Mobile was entered on login page")
        }

        // Verify Password field is clear and then type value
        if(this.getPasswordTextField().invoke("have.value","")){
            cy.log("Password Text Field was empty")
            // Enter Password
            this.getPasswordTextField().type(pass)
            cy.log("Password was entered on login page")
        }
        else{
            cy.log("Password Text Field was not empty")
            this.getPasswordTextField().clear()
            cy.log("Password Text Field was cleared successfully")
            // Enter Password
            this.getPasswordTextField().type(pass)
            cy.log("Password was entered on login page")
        }
        
        // Verify Login Button is visible
        this.getLoginButton().should("be.visible").should("be.enabled").click()
        cy.log("Login Button was dispalyed and clicked successfully")

        cy.wait(20)
        this.getLoginLink().should("be.not.visible")
        cy.log("User got login successfully")
        
        // Logout User
        // this.getUserNameLink().should("be.visible")
        // cy.log("User Name was displayed after successful login")
        // this.getUserNameLink().click()

        // this.getLogoutLink().click()
    }
}

export default LoginPageSuccess