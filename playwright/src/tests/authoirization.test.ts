import { test, expect } from "./base.test";
import { UserAuthData } from "../data/common";

test.describe('Authorization tests', () => {
  test('Succesfull login step by step', async ({ page, loginPage, dashboardPage }) => {
    //step 1 - open Login page
    await loginPage.goto(loginPage.url());

    //step 2 - assert that all necessary elements are visible
    await expect(loginPage.inputEmail, 'Login input is visible').toBeVisible();
    await expect(loginPage.inputPassword, 'Password input is visible').toBeVisible();
    await expect(loginPage.buttonSignIn, 'Sign In button is visible').toBeVisible();

    //step 3 - fill Email and Password inputs
    await loginPage.inputEmail.fill(UserAuthData.email);
    await loginPage.inputPassword.fill(UserAuthData.password);

    //step 4 - click on "Log in" button and check page after authorization
    await loginPage.buttonSignIn.click();
    await expect(page, 'Check redirect after login').toHaveURL(dashboardPage.url());
    await expect(dashboardPage.headerSection.container, 'Header menu is visible for authorized user').toBeVisible();
  });

  test('Errors during the login', async ({ loginPage }) => {
    //step 1 - open Login page
    await loginPage.goto(loginPage.url());

    //step 2 - assert that all necessary elements are visible
    await expect(loginPage.inputEmail, 'Login input is visible').toBeVisible();
    await expect(loginPage.inputPassword, 'Password input is visible').toBeVisible();
    await expect(loginPage.buttonSignIn, 'Sign In button is visible').toBeVisible();

    //step 3 - click on "Log in" button
    await loginPage.buttonSignIn.click();

    //step 4 - check error icon and message for Email input
    await expect(loginPage.iconErrorForEmailInput, 'Error icon for Email input is visible').toBeVisible();
    await loginPage.iconErrorForEmailInput.hover();
    await expect(loginPage.tooltipErrorForEmailInput, 'Error message for Email input is visible').toBeVisible();

    //step 5 - check error icon and message for Password input
    await expect(loginPage.iconErrorForPasswordInput, 'Error icon for Password input is visible').toBeVisible();
    await loginPage.iconErrorForPasswordInput.hover();
    await expect(loginPage.tooltipErrorForPasswordInput, 'Error message for Password input is visible').toBeVisible();
  });

});
