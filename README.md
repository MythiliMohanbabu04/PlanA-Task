# PlanA-Task

This repository contains automated tests for Web UI and API using Cypress.io. 
The tests cover functional scenarios for the Web UI of the https://demoqa.com/books website and API testing of https://emissions-api.org/

**Tool used to Automate**: Cypress version 12.14.0

**Programming Langauge** : TypeScript

**Type of Framework** : Page object model and data driven framework.

**POM**: As per the page object model, I have maintained a class for every web element. Each web element has a separate class which holds functionalities and members of that web page.

**Packages**: Cypress has inbuild packages like fixtures where we can use for test data,support to maintain our page objects,integrations to have our spec files.

**Test Report:** Mochaawesome report

**Package.json file**: This will help to make it easy for others to manage and install the npm.

**Note** : Didn't connect the test with Cypress Dashboard due to data privacy concerns

**Running the Test**

Pre-requisite - Need cypress (https://www.cypress.io) and nodejs (https://nodejs.org) installed

**open terminal on the test folder path and enter**

        npx cypress open

A test runner will open then you can find all your test folders on left side ,to run the UI tests just click **automationtask.cy.ts** and to run API test just click **apitask.cy.ts**

A new chrome window opens and test run on it

**Run the tests individually**:

# Run functional UI tests
         npx cypress run --spec cypress/e2e/automationtask.cy.ts

# Run API tests
     npx cypress run --spec cypress/e2e/apitask.cy.ts

**Run & Generate Report:**

        npx cypress run --reporter mochawesome

**To run headless:**
                                
        npm run test --headless
        
**Reports**
 
Once the complete tests run successfully, report will be generated under mochawesome-report folder .
