$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("BDD.feature");
formatter.feature({
  "line": 2,
  "name": "Login page Validation",
  "description": "",
  "id": "login-page-validation",
  "keyword": "Feature",
  "tags": [
    {
      "line": 1,
      "name": "@tst"
    }
  ]
});
formatter.scenarioOutline({
  "line": 4,
  "name": "Login page validation with positive credentials",
  "description": "",
  "id": "login-page-validation;login-page-validation-with-positive-credentials",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 6,
  "name": "the user is on demo.automationtesting home page",
  "keyword": "Given "
});
formatter.step({
  "comments": [
    {
      "line": 7,
      "value": "#Given is used as a prerequiste condition"
    }
  ],
  "line": 8,
  "name": "user clicks on Skip Signin button",
  "keyword": "Then "
});
formatter.step({
  "line": 9,
  "name": "user is on Register page",
  "keyword": "When "
});
formatter.step({
  "comments": [
    {
      "line": 10,
      "value": "#when is used to specify the condition"
    }
  ],
  "line": 11,
  "name": "user enters the \"\u003cFirstname\u003e\" and \"\u003cLastname\u003e\"",
  "keyword": "Then "
});
formatter.step({
  "comments": [
    {
      "line": 12,
      "value": "#Then is used to perform the next action"
    }
  ],
  "line": 13,
  "name": "user clicks on Submit button",
  "keyword": "Then "
});
formatter.step({
  "line": 14,
  "name": "Close the browser",
  "keyword": "Then "
});
formatter.examples({
  "line": 16,
  "name": "",
  "description": "",
  "id": "login-page-validation;login-page-validation-with-positive-credentials;",
  "rows": [
    {
      "cells": [
        "Firstname",
        "Lastname"
      ],
      "line": 17,
      "id": "login-page-validation;login-page-validation-with-positive-credentials;;1"
    },
    {
      "cells": [
        "Priya",
        "Aravindakshan"
      ],
      "line": 18,
      "id": "login-page-validation;login-page-validation-with-positive-credentials;;2"
    },
    {
      "cells": [
        "Harshitha",
        "Rathish"
      ],
      "line": 19,
      "id": "login-page-validation;login-page-validation-with-positive-credentials;;3"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 18,
  "name": "Login page validation with positive credentials",
  "description": "",
  "id": "login-page-validation;login-page-validation-with-positive-credentials;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 1,
      "name": "@tst"
    }
  ]
});
formatter.step({
  "line": 6,
  "name": "the user is on demo.automationtesting home page",
  "keyword": "Given "
});
formatter.step({
  "comments": [
    {
      "line": 7,
      "value": "#Given is used as a prerequiste condition"
    }
  ],
  "line": 8,
  "name": "user clicks on Skip Signin button",
  "keyword": "Then "
});
formatter.step({
  "line": 9,
  "name": "user is on Register page",
  "keyword": "When "
});
formatter.step({
  "comments": [
    {
      "line": 10,
      "value": "#when is used to specify the condition"
    }
  ],
  "line": 11,
  "name": "user enters the \"Priya\" and \"Aravindakshan\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Then "
});
formatter.step({
  "comments": [
    {
      "line": 12,
      "value": "#Then is used to perform the next action"
    }
  ],
  "line": 13,
  "name": "user clicks on Submit button",
  "keyword": "Then "
});
formatter.step({
  "line": 14,
  "name": "Close the browser",
  "keyword": "Then "
});
formatter.match({
  "location": "loginstepdefination.user_is_on_homepage()"
});
formatter.result({
  "duration": 36789554406,
  "status": "passed"
});
formatter.match({
  "location": "loginstepdefination.user_clicks_skipsignin()"
});
formatter.result({
  "duration": 12886218209,
  "status": "passed"
});
formatter.match({
  "location": "loginstepdefination.user_is_on_registerpage()"
});
formatter.result({
  "duration": 103964544,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Priya",
      "offset": 17
    },
    {
      "val": "Aravindakshan",
      "offset": 29
    }
  ],
  "location": "loginstepdefination.enter_text(String,String)"
});
formatter.result({
  "duration": 1269367552,
  "status": "passed"
});
formatter.match({
  "location": "loginstepdefination.clicks_submit()"
});
formatter.result({
  "duration": 646081948,
  "status": "passed"
});
formatter.match({
  "location": "loginstepdefination.close_browser()"
});
formatter.result({
  "duration": 7362312837,
  "status": "passed"
});
formatter.scenario({
  "line": 19,
  "name": "Login page validation with positive credentials",
  "description": "",
  "id": "login-page-validation;login-page-validation-with-positive-credentials;;3",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 1,
      "name": "@tst"
    }
  ]
});
formatter.step({
  "line": 6,
  "name": "the user is on demo.automationtesting home page",
  "keyword": "Given "
});
formatter.step({
  "comments": [
    {
      "line": 7,
      "value": "#Given is used as a prerequiste condition"
    }
  ],
  "line": 8,
  "name": "user clicks on Skip Signin button",
  "keyword": "Then "
});
formatter.step({
  "line": 9,
  "name": "user is on Register page",
  "keyword": "When "
});
formatter.step({
  "comments": [
    {
      "line": 10,
      "value": "#when is used to specify the condition"
    }
  ],
  "line": 11,
  "name": "user enters the \"Harshitha\" and \"Rathish\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Then "
});
formatter.step({
  "comments": [
    {
      "line": 12,
      "value": "#Then is used to perform the next action"
    }
  ],
  "line": 13,
  "name": "user clicks on Submit button",
  "keyword": "Then "
});
formatter.step({
  "line": 14,
  "name": "Close the browser",
  "keyword": "Then "
});
formatter.match({
  "location": "loginstepdefination.user_is_on_homepage()"
});
formatter.result({
  "duration": 12641768993,
  "status": "passed"
});
formatter.match({
  "location": "loginstepdefination.user_clicks_skipsignin()"
});
formatter.result({
  "duration": 6530008617,
  "status": "passed"
});
formatter.match({
  "location": "loginstepdefination.user_is_on_registerpage()"
});
formatter.result({
  "duration": 31875881,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Harshitha",
      "offset": 17
    },
    {
      "val": "Rathish",
      "offset": 33
    }
  ],
  "location": "loginstepdefination.enter_text(String,String)"
});
formatter.result({
  "duration": 530097290,
  "status": "passed"
});
formatter.match({
  "location": "loginstepdefination.clicks_submit()"
});
formatter.result({
  "duration": 185112218,
  "status": "passed"
});
formatter.match({
  "location": "loginstepdefination.close_browser()"
});
formatter.result({
  "duration": 7116216603,
  "status": "passed"
});
});