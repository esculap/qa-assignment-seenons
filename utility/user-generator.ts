//Define variables that will be used for creating unique emails. Timestamp in Unix format is used as unique id.

export const TIME_ID = Date.now();
export const EMAIL = `test-mail-${TIME_ID}@mail.com`;
export const FIRST_NAME = `Test-firstName-${TIME_ID}`;
export const LAST_NAME = `Test-lastName-${TIME_ID}`;
export const PASSWORD = "Q1234567";
