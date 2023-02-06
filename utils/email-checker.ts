import { expect, Page } from '@playwright/test'
import * as CONSTS from '../utils/user-generator'

export class EmailChecker {
  readonly page: Page

  constructor(page: Page) {
    this.page = page
  }

  async checkRegistrationEmail() {
    // go to mail service and use the use we used in sign up flow
    await this.page.goto('https://mailsac.com/')
    await this.page.getByPlaceholder('anything').click()
    await this.page.getByPlaceholder('anything').fill(CONSTS.USERNAME)
    // wait for receiving registration email
    await this.page.waitForTimeout(10000)
    await this.page.getByRole('button', { name: 'Check the mail!' }).click()
    //open registration email
    await this.page
      .getByRole('cell', {
        name: 'Welcome to Seenons, activate your account now',
      })
      .click()
    const page1Promise = this.page.waitForEvent('popup')
    await this.page
      .getByRole('link', { name: 'Unblock links and images ↗' })
      .click()
    //login to the mail service
    const page1 = await page1Promise
    await page1.getByPlaceholder('username').click()
    await page1.getByPlaceholder('username').fill('esculap')
    await page1.getByPlaceholder('password').click()
    await page1.getByPlaceholder('password').fill('mvq!duc_ndm4dbj4UFC')
    await page1.getByRole('button', { name: 'Sign In' }).click()
    // check for activation button in the email and click it
    const page2Promise = page1.waitForEvent('popup')
    await page1.getByRole('link', { name: 'Activate your account' }).click()
    const page2 = await page2Promise
    // check that user is redirected to the Seenons page
    await expect(
      page2.getByRole('heading', {
        name: 'Manage & schedule pickups for your waste streams',
      })
    ).toBeVisible()
  }
}
