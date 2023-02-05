// signup-page.ts
import { expect, Locator, Page } from "@playwright/test";
import { EMAIL } from "../utility/user-generator";

export class SignUpPage {
  readonly page: Page;
  readonly emailField: Locator;
  readonly confirmBox: Locator;
  readonly nextButton: Locator;
  readonly backButton: Locator;
  readonly registerButton: Locator;
  readonly passwordField: Locator;
  readonly confirmPasswordField: Locator;
  readonly firstNameField: Locator;
  readonly lastNameField: Locator;

  constructor(page: Page) {
    this.page = page;
    this.emailField = page.getByPlaceholder("Enter your e-mail");
    this.confirmBox = page.getByRole("checkbox");
    this.nextButton = page.getByRole("button", { name: "Next" });
    this.backButton = page.getByRole("button", { name: "Back" });
    this.registerButton = page.getByRole("button", { name: "Register" });
    this.passwordField = page.getByLabel("Password*", { exact: true });
    this.confirmPasswordField = page.getByLabel("Confirm password*");
    this.firstNameField = page.getByPlaceholder("Enter your first name");
    this.lastNameField = page.getByPlaceholder("Enter your last name");
  }

  async goto() {
    await this.page.goto("https://demo.seenons.com/");
    await this.page.getByRole("link", { name: "Sign-up here!" }).click();
  }

  async fillEmail(email: string) {
    await this.emailField.click();
    await this.emailField.fill(email);
  }

  async fillPassword(password: string) {
    await this.passwordField.click();
    await this.passwordField.fill(password);
  }

  async fillPasswordConfirmation(password: string) {
    await this.confirmPasswordField.click();
    await this.confirmPasswordField.fill(password);
  }

  async fillFirstName(first_name: string) {
    await this.firstNameField.click();
    await this.firstNameField.fill(first_name);
  }

  async fillLastName(last_name: string) {
    await this.lastNameField.click();
    await this.lastNameField.fill(last_name);
  }

  async clickConfirmCheckbox() {
    await this.confirmBox.check();
    await expect(this.confirmBox).toBeChecked();
  }

  async clickNextButton() {
    await this.nextButton.click();
  }

  async clickBackButton() {
    await this.backButton.click();
  }

  async clickRegisterButton() {
    await this.registerButton.click();
  }

  async ifEmailPage() {
    await expect(this.page.getByText("Enter your e-mail")).toBeVisible();
  }

  async ifPasswordPage() {
    await expect(this.page.getByText("Choose a password")).toBeVisible();
  }

  async ifNamePage() {
    await expect(this.page.getByText("What's your name?")).toBeVisible();
  }

  async ifConfirmationPage() {
    await expect(
      this.page.getByText("A confirmation e-mail is on its way!")
    ).toBeVisible();
  }
}
