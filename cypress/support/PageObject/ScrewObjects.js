class ScrewObjects {
  getCookies() {
    return cy.iframe().find("a.call");
  }
  getSelectStore() {
    return cy.get(".store-text.replaced");
  }
  getStoreBox() {
    return cy.get("#search_branch_textbox");
  }
  getFindStore() {
    return cy.get("#search_branch_button");
  }
  getNearbyStore() {
    return cy.get("#A > a > .sl__nearby-address > h3");
  }
  getSelectedStore() {
    return cy.get(".lg-24 > .btn");
  }
}
export default ScrewObjects;
