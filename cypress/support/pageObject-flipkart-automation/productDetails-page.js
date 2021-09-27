import HomePage from "./home-page"

class ProductDetailsPage extends HomePage{
    // Locaters
    fav_button = 'div[class="_2hVSre _25_uYi"]'
    rem_fav_button = 'div[class="_2hVSre _25_uYi _21GqcY"]'
    pin_code_text = "#pincodeInputId"
    add_to_cart_button = 'button[class="_2KpZ6l _2U9uOA _3v1-ww"]'

    // Function to get locaters
    getFavButton(){
        return cy.get(this.fav_button)
    }

    getRemoveFavButton(){
        return cy.get(this.rem_fav_button)
    }

    getPinCodeField(){
        return cy.get(this.pin_code_text)
    }

    getAddToCartButton(){
        return cy.get(this.add_to_cart_button)
    }

    // Method to add and remove product to fav
    check_product_fav(){
        // Verify fav button is visible
        this.getFavButton().should("be.visible")
        cy.log("Fav button was displayed on Product Details")
        // Verify product is adding to fav(wish list)
        this.getFavButton().click()
        cy.log("Product was successfully added to fav(wish list")

        cy.wait(30)
        // Verify product is remove from fav(wish list)
        this.getRemoveFavButton().click()
        cy.log("Product was successfully removed from fav(wish list")
    } 

    check_pin_code(pin){
        // Verify Pin code text field is visible
        this.getPinCodeField().should("be.visible").should("be.enabled")
        cy.log("Pin Code Text Field was displayed and enabled on product details page")

        // Clear the Pin Code Text Field
        this.getPinCodeField().clear()
        cy.log("Pin Code Text Field was cleared successfully")

        // Enter Pin Code
        this.getPinCodeField().type(pin)
        cy.log("Pin Code was entered successfully")
    }

    check_add_to_cart(){
        // Verify Add to Cart button is visible
        this.getAddToCartButton().should("be.visible")
        cy.log("Add To Cart Button was displayed successfully")
    }
}

export default ProductDetailsPage