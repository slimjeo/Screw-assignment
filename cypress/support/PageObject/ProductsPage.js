class ProductsPage {
  onSearchBox() {
    return cy.get("#mainSearch-input");
  }
  onSubmitButton() {
    return cy.get("#search_submit_button");
  }
  onAddProduct() {
    return cy.get("#product_add_button_1550P");
  }
  onCheckoutButton() {
    return cy.get("#checkout_now_btn");
  }
  onFinalCheck() {
    return cy.get("#topCheckoutButton");
  }
}
export default ProductsPage;
