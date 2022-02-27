Feature: End to end Ecommerce validation

    Application Regression

  Scenario: Ecommerce Validation
  Given I open ecommerce page accept the cookies
  When I pick nearby store close to DA122PF
  And I add item to cart
  Then I checked out