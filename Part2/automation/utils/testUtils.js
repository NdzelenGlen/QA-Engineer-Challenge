export class TestUtils {
  static async takeScreenshot(page, testInfo, name) {
    const screenshot = await page.screenshot({ fullPage: true });
    await testInfo.attach(name, { body: screenshot, contentType: 'image/png' });
  }

  static async waitForPageLoad(page) {
    await page.waitForLoadState('networkidle');
  }

  static generateRandomEmail() {
    const timestamp = Date.now();
    return `test${timestamp}@example.com`;
  }

  static generateRandomString(length = 8) {
    const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
    let result = '';
    for (let i = 0; i < length; i++) {
      result += chars.charAt(Math.floor(Math.random() * chars.length));
    }
    return result;
  }

  static async logTestStep(page, step) {
    console.log(`Test Step: ${step}`);
  }

  static async verifyErrorMessage(page, expectedMessage, actualMessage) {
    if (actualMessage && actualMessage.includes(expectedMessage)) {
      return true;
    }
    return false;
  }

  static async verifyDateFormat(dateString, expectedFormat = 'YYYY-MM-DD') {
    if (expectedFormat === 'YYYY-MM-DD') {
      const regex = /^\d{4}-\d{2}-\d{2}$/;
      return regex.test(dateString);
    } else if (expectedFormat === 'DD-MM-YY') {
      const regex = /^\d{2}-\d{2}-\d{2}$/;
      return regex.test(dateString);
    }
    return false;
  }
}