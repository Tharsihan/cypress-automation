Feature: COMMON - Lighthouse
  As a user we would like that the website rakuten had good response time , means performance
  With lightouse, you can incorporate in your end to end test , some features to check seo, perfomance, scoring of your website

  @lighthouse @Desktop
  Scenario: Check seo, perfomance in your website
    Given a user who is not logged in
    Then  I should see web audit results

