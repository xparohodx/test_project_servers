import { test as base, expect } from "@playwright/test";
import * as pages from "../pages";

const test = base.extend<pages.PagesFixtures>({
  loginPage: async ({ page }, use) => {
    await use(new pages.LoginPage(page));
  },
  registrationPage: async ({ page }, use) => {
    await use(new pages.RegistrationPage(page));
  },
  dashboardPage: async ({ page }, use) => {
    await use(new pages.DashboardPage(page));
  },
  profileEditPage: async ({ page }, use) => {
    await use(new pages.ProfileEditPage(page));
  },
  contactsPage: async ({ page }, use) => {
    await use(new pages.ContactsPage(page));
  },
  contactEditPage: async ({ page }, use) => {
    await use(new pages.ContactEditPage(page));
  },
  contactNewPage: async ({ page }, use) => {
    await use(new pages.ContactNewPage(page));
  },
  contactInfoPage: async ({ page }, use) => {
    await use(new pages.ContactInfoPage(page));
  },
  cloudComputingPage: async ({ page }, use) => {
    await use(new pages.CloudComputingPage(page));
  },
  cloudComputingEditorPage: async ({ page }, use) => {
    await use(new pages.CloudComputingEditorPage(page));
  },
  profileInfoPage: async ({ page }, use) => {
    await use(new pages.ProfileInfoPage(page));
  },
  paymentMethodsPage: async ({ page }, use) => {
    await use(new pages.PaymentMethodsPage(page));
  }
});

test.afterEach(async ({ page }, testInfo) => {
  if (testInfo.status !== testInfo.expectedStatus) {
    await testInfo.attach("fullPage-screenshot", {
      body: await page.screenshot({ fullPage: true }),
      contentType: "image/png",
    });
  }
});

export { test, expect };
