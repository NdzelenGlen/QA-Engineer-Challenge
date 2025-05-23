import { test, expect } from '@playwright/test';
import { UserProfilePage } from '../../pages/UserProfilePage.js';
import { TestUtils } from '../../utils/testUtils.js';

test.describe('UI Elements Testing - Section 1', () => {
  let userProfilePage;

  test.beforeEach(async ({ page }) => {
    userProfilePage = new UserProfilePage(page);
    await userProfilePage.navigateToPage();
  });

  test('1.1 - Open browser and verify web browser opened successfully', async ({ page }) => {
    await TestUtils.logTestStep(page, 'Opening browser and navigating to page');
    
    await expect(page).toHaveURL(/qa-assessment\.pages\.dev/);
    
    await expect(page.locator('body')).toBeVisible();
  });

  test('1.2 - Navigate to https://qa-assessment.pages.dev/ and verify page loads', async ({ page }) => {
    await TestUtils.logTestStep(page, 'Verifying page loads correctly');
    
    await expect(page).toHaveURL('https://qa-assessment.pages.dev/');
    
    await expect(userProfilePage.submitButton).toBeVisible();
  });

  test('1.3 - Check if all input fields are present', async ({ page }) => {
    await TestUtils.logTestStep(page, 'Checking all input fields presence');
    
    await expect(userProfilePage.firstNameField).toBeVisible();
    await expect(userProfilePage.lastNameField).toBeVisible();
    await expect(userProfilePage.emailField).toBeVisible();
    await expect(userProfilePage.passwordField).toBeVisible();
    await expect(userProfilePage.confirmPasswordField).toBeVisible();
    await expect(userProfilePage.phoneField).toBeVisible();
    await expect(userProfilePage.addressField).toBeVisible();
    await expect(userProfilePage.linkedinField).toBeVisible();
    await expect(userProfilePage.githubField).toBeVisible();
    await expect(userProfilePage.dateOfBirthField).toBeVisible();
  });

  test('1.4 - Check if Gender field has 3 radio buttons', async ({ page }) => {
    await TestUtils.logTestStep(page, 'Checking gender radio buttons');
    
    await expect(userProfilePage.maleRadio).toBeVisible();
    await expect(userProfilePage.femaleRadio).toBeVisible();
    await expect(userProfilePage.preferNotSayRadio).toBeVisible();
  });

  test('1.5 - Click on date of birth field and verify calendar opens', async ({ page }) => {
    await TestUtils.logTestStep(page, 'Testing date of birth field calendar');
    
    await userProfilePage.dateOfBirthField.click();
    
   
    const isDatePickerOpen = await userProfilePage.isDatePickerOpened();
    

    await expect(userProfilePage.dateOfBirthField).toBeFocused();
  });

  test('1.6 - Check if Submit button is present and clickable', async ({ page }) => {
    await TestUtils.logTestStep(page, 'Testing submit button presence and clickability');
    
    await expect(userProfilePage.submitButton).toBeVisible();
    
    await expect(userProfilePage.submitButton).toBeEnabled();
  });
});