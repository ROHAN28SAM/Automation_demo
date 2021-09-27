import HomePage from "../../support/pageObject-flipkart-automation/home-page"
import LandingPage from "../../support/pageObject-flipkart-automation/landing-page"
import LoginPageFailure from "../../support/pageObject-flipkart-automation/login-page-failure"
import LoginPageSuccess from "../../support/pageObject-flipkart-automation/login-page-success"
import ProductDetailsPage from "../../support/pageObject-flipkart-automation/productDetails-page"
describe("PageObject-ass-testing",()=>{
    let t_data

    beforeEach(function(){
        cy.visit("www.flipkart.com")
        cy.log("Application Invoked Successfully")
        cy.fixture("externaldata").then((testdata)=>{
            t_data = testdata
        })
    })

    it("landing_page_check_method",()=>{
        const land_page = new LandingPage()
        land_page.check_landing_page()
    })

    it("failure_login_method",()=>{
        const login_page_fail = new LoginPageFailure()
        login_page_fail.check_failure_user_login(t_data.email)
    })

    it("successful_login_method",()=>{
        const login_page_success = new LoginPageSuccess()
        login_page_success.check_successful_user_login(t_data.email,t_data.pass)
    })

    it("search_product_method",()=>{
        const home_page = new HomePage()
        home_page.check_search_product(t_data.search_product)
    })

    it("add_product_fav&cart_method",()=>{
        const login_page_success = new LoginPageSuccess()
        login_page_success.check_successful_user_login(t_data.email,t_data.pass)
        const home_page = new HomePage()
        home_page.check_search_product(t_data.search_product)
        const product_detail_page = new ProductDetailsPage()
        product_detail_page.check_product_fav()
        product_detail_page.check_pin_code(t_data.pin)
        product_detail_page.check_add_to_cart()
    })
}) 