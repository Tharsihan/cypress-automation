Feature: COMMON - Cart tooltip from header
  As a user of the Rakuten website
  I want to interact with the cart from the header
  So that I can delete item or warranty from the cart

  Background:
    Given a user who is not logged in

  @DeleteWarrantyFromHeader @Desktop
  Scenario: Deleting warranty from cart tooltip
    And he has 1 item with warranty in the cart
    And he opens the monolith cart tooltip
    When he clicks on the warranty's recycle bin icon
    Then the warranty is deleted from the tooltip and the item is still displayed

