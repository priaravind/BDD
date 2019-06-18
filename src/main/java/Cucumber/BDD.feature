@tst 
Feature: Login page Validation

Scenario Outline: Login page validation with positive credentials

Given the user is on demo.automationtesting home page
#Given is used as a prerequiste condition
Then user clicks on Skip Signin button
When user is on Register page
#when is used to specify the condition
Then user enters the "<Firstname>" and "<Lastname>"
#Then is used to perform the next action
Then user clicks on Submit button
Then Close the browser

Examples:
|Firstname|Lastname|
|Priya	  |Aravindakshan|
|Harshitha|Rathish |


