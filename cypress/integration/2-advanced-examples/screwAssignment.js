/// <reference types ="Cypress" />
/// <reference types ="cypress-iframe" />
import ScrewObjects from "../../support/PageObject/ScrewObjects";
import ProductsPage from "../../support/PageObject/ProductsPage";
import "cypress-iframe";

describe("my first Assignment", function () {
  it(" The SrewFix assignment", function () {
    const screwobject = new ScrewObjects();
    const productpage = new ProductsPage();
    cy.visit("https://www.screwfix.com");
    // cy.frameLoaded("#defaultpreferencemanager");
    screwobject.getCookies().click();
    screwobject.getSelectStore().click();
    screwobject.getStoreBox().click().type("DA122PF");
    screwobject.getFindStore().click();
    screwobject.getNearbyStore().click();
    screwobject.getSelectedStore().click();

    // second phase
    productpage.onSearchBox().click().type("padlock");
    productpage.onSubmitButton().click();
    productpage.onAddProduct().click();
    productpage.onCheckoutButton().click();
    productpage.onFinalCheck().click();
  });
});
