
Feature: TECH - DeviceFingerprint: - OTP method in login - Datacenter IP force rule
  As user, new or existing, I can secure the authentication of my login via one-time-password,
  As users coming from data center, we can force with a rule the otp method or block it by a link for them

  @OTP1
  Scenario: Account Creation and setup one-time-password method in login
    Given a user who is not logged in
    And he navigates to "/connect"
    And he clicks on the new client button
    And he fills in the registration form
    And he clicks on create my account button
    And he should be redirected to "/user"
    When The user click in the double authentification link
    Then He is redirected in tfa component disable by default
    And He clicks on configure button
    And he puts his number on the editfield
    And he is redirected to "buyers/2fa/login"
    And he get the code received by sms
    And he puts the code
    And He is redireceted in my account page and the tfa component is activated
    And He has a devdee cookie which is not trusted
    And Verify the devdee via webservice, it returns 202
