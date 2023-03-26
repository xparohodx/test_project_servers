import { test, expect } from "./base.test";

test.describe('User profile tests', () => {
    test('Logout test', async ({ dashboardPage, loginPage, page }) => {
        //step 1 - open Dashboard page
        await dashboardPage.goto(dashboardPage.url());
        await dashboardPage.accountInfoDialog.closeIfVisible();

        //step 2 - click on User Menu button
        await dashboardPage.headerSection.buttonUserMenu.click();
        await expect(dashboardPage.headerSection.dropdownUserMenu, 'Assert that user menu is visible').toBeVisible()

        //step 3 - click in "Logout" button
        await dashboardPage.headerSection.buttonLogout.click();
        await expect(page, 'Check redirect after logout').toHaveURL(loginPage.url());
    });
    test('Edit profile info', async ({ profileEditPage, profileInfoPage, page }) => {
        //step 1 - open Profile edit page
        await profileEditPage.goto(profileEditPage.url());

        //step 2 - fill profile info
        await profileEditPage.fillProfileInfo();

        //step 3 - click "Save" button
        await profileEditPage.buttonSave.click();
        await expect(profileEditPage.alertSuccess, 'Success message is visible').toBeVisible();
        await expect(page, 'Assert redirection').toHaveURL(profileInfoPage.url());
    });


})