import { PlaywrightTestConfig } from "@playwright/test";

export const baseURL = "https://portal.servers.com";

const config: PlaywrightTestConfig = {
  globalSetup: 'playwright/.auth/auth.setup.ts',
  projects: [
    {
      name: 'Authorized user',
      testIgnore: 'authoirization.*',
      use:
      {
        storageState: 'playwright/.auth/user.json',
      },
    },
    {
      name: 'Unauthorized user',
      testMatch: 'authoirization.*',
    },
  ],
  use:
  {
    baseURL: baseURL,
    actionTimeout: 120 * 1000,
    navigationTimeout: 120 * 1000,
    browserName: 'chromium',
  },
  reporter: [
    [
      "allure-playwright",
      {
        detail: true,
        outputFolder: "reports/allure-results/",
      },
    ],
  ],
};

export default config;
