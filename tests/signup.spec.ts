// signup.spec.ts
import { test } from "@playwright/test";
import { SignUpPage } from "../pages/signup-page";
import * as CONSTS from "../utility/user-generator";

test("SignUp flow happy pass", async ({ page }) => {
  const signUpPage = new SignUpPage(page);
  await signUpPage.goto();
  await signUpPage.ifEmailPage();
  await signUpPage.fillEmail(CONSTS.EMAIL);
  await signUpPage.clickConfirmCheckbox();
  await signUpPage.clickNextButton();
  await signUpPage.ifPasswordPage();
  await signUpPage.fillPassword(CONSTS.PASSWORD);
  await signUpPage.fillPasswordConfirmation(CONSTS.PASSWORD);
  await signUpPage.clickNextButton();
  await signUpPage.ifNamePage();
  await signUpPage.fillFirstName(CONSTS.FIRST_NAME);
  await signUpPage.fillLastName(CONSTS.LAST_NAME);
  await signUpPage.clickRegisterButton();
  await signUpPage.ifConfirmationPage();
});
