import { test, expect } from "./base.test";

test.describe('Sidebar menu test', () => {
    test('Sidebar test', async ({ dashboardPage, page, paymentMethodsPage }) => {
        //step 1 - open Dashboard page
        await dashboardPage.goto(dashboardPage.url());
        await dashboardPage.accountInfoDialog.closeIfVisible();

        //step 2 - click on "Networks" menu item - submenu should be visible
        await dashboardPage.sidebarSection.linkNetworks.click();
        await expect(dashboardPage.sidebarSection.submenuNetworks, 'Networks submenu is visible').toBeVisible();

        //setp 3 - click on "Networks" again - submenu should be hidden
        await dashboardPage.sidebarSection.linkNetworks.click();
        await expect(dashboardPage.sidebarSection.submenuNetworks, 'Networks submenu is hidden').toBeHidden();

        //step 4 - click on "Toggle sidebar" button and check that sidebar menu is collapsed
        await dashboardPage.headerSection.buttonSidebarToggle.click();
        expect(await dashboardPage.sidebarSection.assertSidebarIsCollapsed(), 'Sidebar menu is collapsed').toBeTruthy();

        //step 5 - scroll down to "Billing" menu item and hover on it
        await dashboardPage.sidebarSection.linkBilling.scrollIntoViewIfNeeded();
        await dashboardPage.sidebarSection.linkBilling.hover();

        //step 6 - assert that submenu for "Billing" is visible
        await expect(dashboardPage.sidebarSection.submenuBilling, 'Billing submenu is visible').toBeVisible();

        //step 7 - click on "Payment details" in submenu
        await dashboardPage.sidebarSection.linkPaymentDetails.click();
        await expect(page, 'Check redirect on correct page').toHaveURL(paymentMethodsPage.url());

        //step 8 - click on "Toggle sidebar" button and check that sidebar menu is expanded
        await dashboardPage.headerSection.buttonSidebarToggle.click();
        expect(await dashboardPage.sidebarSection.assertSidebarIsExpanded(), 'Sidebar menu is expanded').toBeTruthy();
    })
})

