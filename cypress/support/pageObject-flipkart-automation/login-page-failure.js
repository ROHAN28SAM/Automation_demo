import LoginPageSuccess from "./login-page-success"

class LoginPageFailure extends LoginPageSuccess{
    
    // Method for User Login Failure
    check_failure_user_login(email){
        var elementClicked;

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
        
        this.getLoginButton().should("be.visible").should("be.enabled")
        cy.log("Login Button was dispalyed and enabled")
        
        // Try to login without password
        // Enter Email/Mobile
        this.getEmailTextField().type(email)
        cy.log("Email/Mobile entered on login page")

        // Verify Login Button is clickable
        this.getLoginButton().click(function(){
            elementClicked = true   
        })
        if(elementClicked != true){
            cy.log("Login Button was not clicked")
        }
        else{
            cy.log("Login Button was clicked")
        }
    }
}

export default LoginPageFailure