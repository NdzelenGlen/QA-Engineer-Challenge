export const validUserData = {
  firstName: 'John',
  lastName: 'Smith',
  email: 'john.smith@example.com',
  password: 'P@ssw0rd123',
  confirmPassword: 'P@ssw0rd123',
  gender: 'male',
  dateOfBirth: '1990-01-01',
  phone: '1234567890',
  address: '123 Main St, Apt 1',
  linkedin: 'https://www.linkedin.com/in/johnsmith',
  github: 'https://github.com/johnsmith'
};

export const invalidFirstNames = {
  numbersOnly: '12345',
  alphanumeric: 'John123',
  withSymbols: 'John@#$'
};

export const invalidLastNames = {
  numbersOnly: '54321',
  alphanumeric: 'Smith456',
  withSymbols: 'Smith@#$'
};

export const invalidEmails = {
  withoutAt: 'johnsmith.example.com',
  withoutDot: 'john@examplecom',
  withoutDomain: 'john@'
};

export const invalidLinkedInUrls = {
  wrongDomain: 'https://www.facebook.com/johnsmith',
  noHttps: 'www.linkedin.com/in/johnsmith',
  wrongFormat: 'https://linkedin.com/johnsmith'
};

export const invalidGitHubUrls = {
  wrongDomain: 'https://www.gitlab.com/johnsmith',
  noHttps: 'www.github.com/johnsmith',
  wrongFormat: 'https://github.com'
};

export const mandatoryFields = ['firstName', 'lastName', 'email', 'password', 'confirmPassword'];
export const optionalFields = ['gender', 'dateOfBirth', 'phone', 'address', 'linkedin', 'github'];