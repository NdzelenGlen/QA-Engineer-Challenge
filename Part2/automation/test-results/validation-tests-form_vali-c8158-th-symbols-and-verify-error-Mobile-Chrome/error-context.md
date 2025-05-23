# Test info

- Name: Form Validation Testing - Section 2 & 3 >> 3.1.5 - Enter invalid firstname (with symbols) and verify error
- Location: C:\Users\Ndzelen Glen Afoni\Documents\QA Engineer Challenge\Part2\automation\tests\validation-tests\form_validation.spec.js:93:3

# Error details

```
Error: page.goto: net::ERR_INTERNET_DISCONNECTED at https://qa-assessment.pages.dev/
Call log:
  - navigating to "https://qa-assessment.pages.dev/", waiting until "load"

    at UserProfilePage.navigateToPage (C:\Users\Ndzelen Glen Afoni\Documents\QA Engineer Challenge\Part2\automation\pages\UserProfilePage.js:35:21)
    at C:\Users\Ndzelen Glen Afoni\Documents\QA Engineer Challenge\Part2\automation\tests\validation-tests\form_validation.spec.js:11:27
```

# Test source

```ts
   1 | export class UserProfilePage {
   2 |   constructor(page) {
   3 |     this.page = page;
   4 |     
   5 |     // Form field selectors
   6 |     this.firstNameField = page.locator('input[name="firstName"], input#firstName');
   7 |     this.lastNameField = page.locator('input[name="lastName"], input#lastName');
   8 |     this.emailField = page.locator('input[name="email"], input#email, input[type="email"]');
   9 |     this.passwordField = page.locator('input[name="password"], input#password, input[type="password"]').first();
   10 |     this.confirmPasswordField = page.locator('input[name="confirmPassword"], input#confirmPassword').or(page.locator('input[type="password"]').nth(1));
   11 |     this.phoneField = page.locator('input[name="phone"], input#phone, input[type="tel"]');
   12 |     this.addressField = page.locator('input[name="address"], input#address, textarea[name="address"]');
   13 |     this.linkedinField = page.locator('input[name="linkedin"], input#linkedin');
   14 |     this.githubField = page.locator('input[name="github"], input#github');
   15 |     this.dateOfBirthField = page.locator('input[name="dateOfBirth"], input#dateOfBirth, input[type="date"]');
   16 |     
   17 |     // Gender radio buttons
   18 |     this.maleRadio = page.locator('input[value="male"], input#male');
   19 |     this.femaleRadio = page.locator('input[value="female"], input#female');
   20 |     this.preferNotSayRadio = page.locator('input[value="prefer not to say"], input#preferNotSay');
   21 |     
   22 |     // Submit button
   23 |     this.submitButton = page.locator('button[type="submit"], input[type="submit"], button:has-text("Submit")');
   24 |     
   25 |     // Error message selectors
   26 |     this.firstNameError = page.locator('[data-testid="firstName-error"], .error:near(input[name="firstName"])');
   27 |     this.lastNameError = page.locator('[data-testid="lastName-error"], .error:near(input[name="lastName"])');
   28 |     this.emailError = page.locator('[data-testid="email-error"], .error:near(input[name="email"])');
   29 |     this.phoneError = page.locator('[data-testid="phone-error"], .error:near(input[name="phone"])');
   30 |     this.linkedinError = page.locator('[data-testid="linkedin-error"], .error:near(input[name="linkedin"])');
   31 |     this.githubError = page.locator('[data-testid="github-error"], .error:near(input[name="github"])');
   32 |   }
   33 |
   34 |   async navigateToPage() {
>  35 |     await this.page.goto('/');
      |                     ^ Error: page.goto: net::ERR_INTERNET_DISCONNECTED at https://qa-assessment.pages.dev/
   36 |     await this.page.waitForLoadState('networkidle');
   37 |   }
   38 |
   39 |   async fillFirstName(firstName) {
   40 |     await this.firstNameField.fill(firstName);
   41 |   }
   42 |
   43 |   async fillLastName(lastName) {
   44 |     await this.lastNameField.fill(lastName);
   45 |   }
   46 |
   47 |   async fillEmail(email) {
   48 |     await this.emailField.fill(email);
   49 |   }
   50 |
   51 |   async fillPassword(password) {
   52 |     await this.passwordField.fill(password);
   53 |   }
   54 |
   55 |   async fillConfirmPassword(confirmPassword) {
   56 |     await this.confirmPasswordField.fill(confirmPassword);
   57 |   }
   58 |
   59 |   async fillPhone(phone) {
   60 |     await this.phoneField.fill(phone);
   61 |   }
   62 |
   63 |   async fillAddress(address) {
   64 |     await this.addressField.fill(address);
   65 |   }
   66 |
   67 |   async fillLinkedIn(linkedin) {
   68 |     await this.linkedinField.fill(linkedin);
   69 |   }
   70 |
   71 |   async fillGitHub(github) {
   72 |     await this.githubField.fill(github);
   73 |   }
   74 |
   75 |   async selectDateOfBirth(date) {
   76 |     await this.dateOfBirthField.fill(date);
   77 |   }
   78 |
   79 |   async selectGender(gender) {
   80 |     switch(gender.toLowerCase()) {
   81 |       case 'male':
   82 |         await this.maleRadio.check();
   83 |         break;
   84 |       case 'female':
   85 |         await this.femaleRadio.check();
   86 |         break;
   87 |       case 'prefer not to say':
   88 |         await this.preferNotSayRadio.check();
   89 |         break;
   90 |     }
   91 |   }
   92 |
   93 |   async submitForm() {
   94 |     await this.submitButton.click();
   95 |   }
   96 |
   97 |   async clearAllFields() {
   98 |     const fields = [
   99 |       this.firstNameField,
  100 |       this.lastNameField,
  101 |       this.emailField,
  102 |       this.passwordField,
  103 |       this.confirmPasswordField,
  104 |       this.phoneField,
  105 |       this.addressField,
  106 |       this.linkedinField,
  107 |       this.githubField,
  108 |       this.dateOfBirthField
  109 |     ];
  110 |
  111 |     for (const field of fields) {
  112 |       try {
  113 |         await field.fill('');
  114 |       } catch (error) {
  115 |         console.log(`Could not clear field: ${error.message}`);
  116 |       }
  117 |     }
  118 |   }
  119 |
  120 |   async fillValidUserData(userData) {
  121 |     if (userData.firstName) await this.fillFirstName(userData.firstName);
  122 |     if (userData.lastName) await this.fillLastName(userData.lastName);
  123 |     if (userData.email) await this.fillEmail(userData.email);
  124 |     if (userData.password) await this.fillPassword(userData.password);
  125 |     if (userData.confirmPassword) await this.fillConfirmPassword(userData.confirmPassword);
  126 |     if (userData.phone) await this.fillPhone(userData.phone);
  127 |     if (userData.address) await this.fillAddress(userData.address);
  128 |     if (userData.linkedin) await this.fillLinkedIn(userData.linkedin);
  129 |     if (userData.github) await this.fillGitHub(userData.github);
  130 |     if (userData.dateOfBirth) await this.selectDateOfBirth(userData.dateOfBirth);
  131 |     if (userData.gender) await this.selectGender(userData.gender);
  132 |   }
  133 |
  134 |   // Validation methods
  135 |   async isFirstNameFieldVisible() {
```