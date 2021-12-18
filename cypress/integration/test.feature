Feature: Test Bynfor
    Login bynfor

    Scenario: Login into bynfor
        Given user is on Login page
        And user click on Open Login popup
        Then User click on Login in Button

    Scenario: Logout form Bynfor
        # Given user is on Login page
        # And user click on Open Login popup
        # Then User click on Login in Button
        And User open user menu
        Then User click on Logout option