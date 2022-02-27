/// <reference types ="Cypress" />
/// <reference types ="cypress-iframe" />
import ScrewObjects from "../../../../support/PageObject/ScrewObjects";
import ProductsPage from "../../../../support/PageObject/ProductsPage";
import "cypress-iframe";
import { And, Given, Then, When } from "cypress-cucumber-preprocessor/steps";

const screwobject = new ScrewObjects();
const productpage = new ProductsPage();

Given("I open ecommerce page accept the cookies", function () {
  cy.visit("https://www.screwfix.com");
  screwobject.getCookies().click();
});

When("I pick nearby store close to DA122PF", function () {
  screwobject.getSelectStore().click();
  screwobject.getStoreBox().click().type("DA122PF");
  screwobject.getFindStore().click();
  screwobject.getNearbyStore().click();
  screwobject.getSelectedStore().click();
});
And("I add item to cart", function () {
  productpage.onSearchBox().click().type("padlock");
  productpage.onSubmitButton().click();
  productpage.onAddProduct().click();
});
Then("I checked out", function () {
  productpage.onCheckoutButton().click();
  productpage.onFinalCheck().click();
});
