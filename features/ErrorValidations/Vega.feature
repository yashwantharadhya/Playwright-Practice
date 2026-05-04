Feature: Login to Vega

  @Validation
  Scenario Outline: Login with valid and invalid credentials
    Given login to vega with "<username>" and "<password>"
    Then I should see the "<expectedResult>" login result

    Examples:
      | username | password   | expectedResult |
      | Yash     | Yash@2397  | valid          |
      | Yash     | Yash@23978 | invalid        |
