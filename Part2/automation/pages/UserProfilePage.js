export class UserProfilePage {
  constructor(page) {
    this.page = page;
    
    // Form field selectors
    this.firstNameField = page.locator('input[name="firstName"], input#firstName');
    this.lastNameField = page.locator('input[name="lastName"], input#lastName');
    this.emailField = page.locator('input[name="email"], input#email, input[type="email"]');
    this.passwordField = page.locator('input[name="password"], input#password, input[type="password"]').first();
    this.confirmPasswordField = page.locator('input[name="confirmPassword"], input#confirmPassword').or(page.locator('input[type="password"]').nth(1));
    this.phoneField = page.locator('input[name="phone"], input#phone, input[type="tel"]');
    this.addressField = page.locator('input[name="address"], input#address, textarea[name="address"]');
    this.linkedinField = page.locator('input[name="linkedin"], input#linkedin');
    this.githubField = page.locator('input[name="github"], input#github');
    this.dateOfBirthField = page.locator('input[name="dateOfBirth"], input#dateOfBirth, input[type="date"]');
    
    // Gender radio buttons
    this.maleRadio = page.locator('input[value="male"], input#male');
    this.femaleRadio = page.locator('input[value="female"], input#female');
    this.preferNotSayRadio = page.locator('input[value="prefer not to say"], input#preferNotSay');
    
    // Submit button
    this.submitButton = page.locator('button[type="submit"], input[type="submit"], button:has-text("Submit")');
    
    // Error message selectors
    this.firstNameError = page.locator('[data-testid="firstName-error"], .error:near(input[name="firstName"])');
    this.lastNameError = page.locator('[data-testid="lastName-error"], .error:near(input[name="lastName"])');
    this.emailError = page.locator('[data-testid="email-error"], .error:near(input[name="email"])');
    this.phoneError = page.locator('[data-testid="phone-error"], .error:near(input[name="phone"])');
    this.linkedinError = page.locator('[data-testid="linkedin-error"], .error:near(input[name="linkedin"])');
    this.githubError = page.locator('[data-testid="github-error"], .error:near(input[name="github"])');
  }

  async navigateToPage() {
    await this.page.goto('/');
    await this.page.waitForLoadState('networkidle');
  }

  async fillFirstName(firstName) {
    await this.firstNameField.fill(firstName);
  }

  async fillLastName(lastName) {
    await this.lastNameField.fill(lastName);
  }

  async fillEmail(email) {
    await this.emailField.fill(email);
  }

  async fillPassword(password) {
    await this.passwordField.fill(password);
  }

  async fillConfirmPassword(confirmPassword) {
    await this.confirmPasswordField.fill(confirmPassword);
  }

  async fillPhone(phone) {
    await this.phoneField.fill(phone);
  }

  async fillAddress(address) {
    await this.addressField.fill(address);
  }

  async fillLinkedIn(linkedin) {
    await this.linkedinField.fill(linkedin);
  }

  async fillGitHub(github) {
    await this.githubField.fill(github);
  }

  async selectDateOfBirth(date) {
    await this.dateOfBirthField.fill(date);
  }

  async selectGender(gender) {
    switch(gender.toLowerCase()) {
      case 'male':
        await this.maleRadio.check();
        break;
      case 'female':
        await this.femaleRadio.check();
        break;
      case 'prefer not to say':
        await this.preferNotSayRadio.check();
        break;
    }
  }

  async submitForm() {
    await this.submitButton.click();
  }

  async clearAllFields() {
    const fields = [
      this.firstNameField,
      this.lastNameField,
      this.emailField,
      this.passwordField,
      this.confirmPasswordField,
      this.phoneField,
      this.addressField,
      this.linkedinField,
      this.githubField,
      this.dateOfBirthField
    ];

    for (const field of fields) {
      try {
        await field.fill('');
      } catch (error) {
        console.log(`Could not clear field: ${error.message}`);
      }
    }
  }

  async fillValidUserData(userData) {
    if (userData.firstName) await this.fillFirstName(userData.firstName);
    if (userData.lastName) await this.fillLastName(userData.lastName);
    if (userData.email) await this.fillEmail(userData.email);
    if (userData.password) await this.fillPassword(userData.password);
    if (userData.confirmPassword) await this.fillConfirmPassword(userData.confirmPassword);
    if (userData.phone) await this.fillPhone(userData.phone);
    if (userData.address) await this.fillAddress(userData.address);
    if (userData.linkedin) await this.fillLinkedIn(userData.linkedin);
    if (userData.github) await this.fillGitHub(userData.github);
    if (userData.dateOfBirth) await this.selectDateOfBirth(userData.dateOfBirth);
    if (userData.gender) await this.selectGender(userData.gender);
  }

  // Validation methods
  async isFirstNameFieldVisible() {
    return await this.firstNameField.isVisible();
  }

  async isLastNameFieldVisible() {
    return await this.lastNameField.isVisible();
  }

  async isEmailFieldVisible() {
    return await this.emailField.isVisible();
  }

  async isPasswordFieldVisible() {
    return await this.passwordField.isVisible();
  }

  async isConfirmPasswordFieldVisible() {
    return await this.confirmPasswordField.isVisible();
  }

  async isPhoneFieldVisible() {
    return await this.phoneField.isVisible();
  }

  async isAddressFieldVisible() {
    return await this.addressField.isVisible();
  }

  async isLinkedInFieldVisible() {
    return await this.linkedinField.isVisible();
  }

  async isGitHubFieldVisible() {
    return await this.githubField.isVisible();
  }

  async isDateOfBirthFieldVisible() {
    return await this.dateOfBirthField.isVisible();
  }

  async areGenderRadioButtonsVisible() {
    const maleVisible = await this.maleRadio.isVisible();
    const femaleVisible = await this.femaleRadio.isVisible();
    const preferNotSayVisible = await this.preferNotSayRadio.isVisible();
    return maleVisible && femaleVisible && preferNotSayVisible;
  }

  async isSubmitButtonVisible() {
    return await this.submitButton.isVisible();
  }

  async isSubmitButtonClickable() {
    return await this.submitButton.isEnabled();
  }

  async isDatePickerOpened() {
    await this.dateOfBirthField.click();
    const datePickerVisible = await this.page.locator('.react-datepicker, .date-picker, [role="dialog"]').isVisible().catch(() => false);
    return datePickerVisible;
  }

  // Error validation methods
  async getFirstNameErrorMessage() {
    try {
      return await this.firstNameError.textContent();
    } catch {
      return null;
    }
  }

  async getLastNameErrorMessage() {
    try {
      return await this.lastNameError.textContent();
    } catch {
      return null;
    }
  }

  async getEmailErrorMessage() {
    try {
      return await this.emailError.textContent();
    } catch {
      return null;
    }
  }

  async getPhoneErrorMessage() {
    try {
      return await this.phoneError.textContent();
    } catch {
      return null;
    }
  }

  async getLinkedInErrorMessage() {
    try {
      return await this.linkedinError.textContent();
    } catch {
      return null;
    }
  }

  async getGitHubErrorMessage() {
    try {
      return await this.githubError.textContent();
    } catch {
      return null;
    }
  }

  async hasAnyErrorMessage() {
    const errorSelectors = [
      '.error',
      '[class*="error"]',
      '[data-testid*="error"]',
      '.invalid-feedback',
      '.field-error'
    ];
    
    for (const selector of errorSelectors) {
      const errorElements = await this.page.locator(selector).count();
      if (errorElements > 0) {
        return true;
      }
    }
    return false;
  }

  async getDateFormat() {
    const dateValue = await this.dateOfBirthField.inputValue();
    return dateValue;
  }

  async isFormSubmittedSuccessfully() {
    // Check if form was cleared (indicates successful submission based on test case 2.3)
    const firstNameValue = await this.firstNameField.inputValue();
    const lastNameValue = await this.lastNameField.inputValue();
    const emailValue = await this.emailField.inputValue();
    
    return firstNameValue === '' && lastNameValue === '' && emailValue === '';
  }
}