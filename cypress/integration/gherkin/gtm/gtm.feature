
Feature: C2C - GTM Tag on New Selling Experience

  @GTMNSEStep1
  Scenario: Checks NSE step 1 GTMs
    Given a seller who is logged in
    When he navigates to "/seller/sell-form?step=landing"
    Then the "nseStep_1_Event" GTM should be sent
    When he fills the first step with the title "ab"
    And he clicks on the continue button
    Then the "nseStep_1_Event_KO" GTM should be sent
    When he fills the first step with the title "abc"
    And he clicks on the continue button
    And he clicks on the back button
    Then the "nseStep_1_Event" GTM should be sent