Feature: Login to Vega with invalid credentials

@SmokeTest
  Scenario: Login with invalid credentials
     Given login to vega with "Yash" and "Yash@23976"
     Then I should see an error message "The username or password you entered is incorrect."
