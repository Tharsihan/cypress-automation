Feature: Rakuten Feature

  @test
  Scenario: Payment Flow
    Given Connect Login page
    When Search a product
    And  Add the product in the cart
    And Go to the cart
    And The cart is displayed and choose the shipping expedition

