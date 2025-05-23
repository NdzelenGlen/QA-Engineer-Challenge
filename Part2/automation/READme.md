QA Engineer Challenge 
Part 1: Manual Test
The Explanatory test plan ,bug reports were all created using google docs and downloaded in docx format
The Test case document was created using google sheets and downloaded in  xlsx format

Part 2: Test Automation
Automated tests for the QA Assessment webpage using Playwright framework. These tests validate UI elements, form validation, and field requirements based on the manual test cases from Part 1.
Project Structure
part 2/automation/

tests/
ui-tests/
ui-elements.spec.js
validation-tests/
form-validation.spec.js
mandatory-optional-fields.spec.js
pages/
UserProfilePage.js
utils/
testUtils.js
test-data/
testData.js
config/
reports/
test-results/
playwright.config.js
package.json
README.md
Setup

Inititialize and install dependencies
npm init -y
npm install @playwright/test --save-dev
npx playwright install

Running Tests

# Run all tests
npm test

# Run with visible browser
npm run test:headed
 
# Run in UI mode
npm run test:ui

# Run specific test categories
npm run test:ui-only
npm run test:validation-only

# View test report
npm run test:report


Test Coverage

UI Elements Testing

Browser opening and page navigation
Input fields presence and functionality
Gender radio buttons and date picker
Submit button validation

Form Validation Testing

Valid data entry and form submission
Invalid data handling and error messages
Mandatory vs optional field validation

Known Issues
The following issues from manual testing are expected to fail in automation:

Phone number validation prevents valid form submission
Date format displays as DD-MM-YY instead of YYYY-MM-DD
LinkedIn and GitHub URL validation missing
LinkedIn URL incorrectly treated as mandatory field

Configuration

Base URL: https://qa-assessment.pages.dev/
Browsers: Chrome, Firefox, Safari, Mobile Chrome
Reports: HTML, JSON, JUnit formats
Retries: 2 times on failure

Test Reports
Reports are generated in the reports/ folder after test execution. Use npm run test:report to view the interactive HTML report.
Architecture
The framework uses Page Object Model pattern with centralized test data management. Page interactions are encapsulated in UserProfilePage.js, while test data is managed in testData.js for easy maintenance.