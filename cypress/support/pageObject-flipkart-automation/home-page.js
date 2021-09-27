import LandingPage from "./landing-page"

class HomePage extends LandingPage{
    // Locaters
    result_link = 'a[class="_1fQZEK"]'

    // Function to get locaters
    getResult(){
        return cy.get(this.result_link).first()
        // return cy.get(this.result_link).last()
    }

    // Method to search a product
    check_search_product(searchProduct){
        // Verify After successful login user redirected to Home Page/Landing Page
        this.check_landing_page()
        cy.log("User was successfully landed to Home Page")

        // Search a product using search bar
        this.getSearchBar().type(searchProduct)
        cy.log("Product was searched on search bar")

        // Verify submit button is visible
        this.getSubmitButton().should("be.visible")
        cy.log("Submit Button was displayed on Home Page")
        this.getSubmitButton().click()
        cy.log("Submit Button was clicked successfully")

        // Verify product is visible
        this.getResult().first().should("be.visible")
        cy.log("Product was dispalyed on result page")
        this.getResult().first().invoke("removeAttr","target").click()
        // this.getResult().last().invoke("removeAttr","target").click()
        cy.log("Product was clicked and opened successfully")
    }

}

export default HomePage