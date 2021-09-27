class LandingPage{
    // Locaters
    flipkart_logo_img = "#container > div > div._1kfTjk > div._1rH5Jn > div._2Xfa2_ > div._3_C9Hx > div > a:nth-child(1) > img"
    search_bar_text = "input[type=text]"
    login_link = 'a[href="/account/login?ret=/"]'
    submit_button = "button[type=submit]"

    // Function to get the locaters
    getLogo(){
        return cy.get(this.flipkart_logo_img)
    }

    getSearchBar(){
        return cy.get(this.search_bar_text)
    }

    getSubmitButton(){
        return cy.get(this.submit_button)
    }

    getLoginLink(){
        return cy.get(this.login_link)
    }

    // Method to assert the landing page locaters
    check_landing_page(){
        // Verify Logo is visible
        this.getLogo().should("be.visible")
        cy.log("Flipkart Logo was displayed successfully")

        // Verify Search Bar is visible
        this.getSearchBar().should("be.visible").should("be.enabled")
        cy.log("Search Bar was enabled and displayed on landing page")

        // // Verify Login Link is visible
        // this.getLoginLink().should("be.visible")
        // cy.log("Login Link was displayed on landing page")
    }
}

export default LandingPage