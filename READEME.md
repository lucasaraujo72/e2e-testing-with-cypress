
### E2E tests using Cypress

### Test cases
Page: Sign-up
- Sign-up page elements
	- Validate all page elements
	- Validate error messages when fields are not filled in
	- Validate the message according to the selected account type
- Account creation - Supplier option
- Account creation - Buyer option
- Validate emails format with random cases
<br>

---

### Test instructions

#### Installation

[Follow these instructions to install Cypress](https://docs.cypress.io/guides/getting-started/installing-cypress "Install Cypress")
<br>

#### Run Tests

Open the terminal and navigate to the project folder

1. Start Cypress in the browser. You can select a specific test using the UI:
   `npx cypress open`

2. To run all tests in headless mode:
    `npx cypress run`

3. To run a specific test in headless mode:
    `npx cypress run --spec 'path/to/files/*.spec.js'`
<br>
---
### HTML Report
After running the tests, a file is generated and stored in the `cypress/reports/html` folder.