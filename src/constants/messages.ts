export const USERS_MESSAGES = {
  VALIDATION_ERROR: 'Validation error',
  NAME_IS_REQUIRED: 'Name is required',
  NAME_MUST_BE_STRING: 'Name must be a string',
  NAME_LENGTH_MUST_BE_BETWEEN_1_AND_100: 'Name length must be between 1 and 100 characters',
  EMAIL_IS_REQUIRED: 'Email is required',
  EMAIL_ALREADY_EXISTS: 'Email already exists',
  EMAIL_MUST_BE_VALID: 'Email must be a valid email address',
  PASSWORD_IS_REQUIRED: 'Password is required',
  PASSWORD_MUST_BE_STRING: 'Password must be a string',
  PASSWORD_LENGTH_MUST_BE_BETWEEN_6_AND_50: 'Password length must be between 6 and 50 characters',
  PASSWORD_MUST_BE_STRONG:
    'Password must be longer than 6 characters and contain at least 1 lowercase letter, 1 uppercase letter, 1 number, and 1 symbol',
  CONFIRM_PASSWORD_IS_REQUIRED: 'Confirm password is required',
  CONFIRM_PASSWORD_MUST_MATCH: 'Confirm password must match the password',
  DATE_OF_BIRTH_IS_ISO8601: 'Date of birth must be a valid ISO8601 date',

  EMAIL_OR_PASSWORD_INCORRECT: 'Email or password is incorrect',
  LOGIN_SUCCESS: 'Login successful',
  REGISTER_SUCCESS: 'Registration successful'
} as const
