import { BaseSection } from "./baseSection.section";

export class CookiesDialog extends BaseSection {
  readonly buttonAllowAll = this.container.locator(
    '//button[@id="CybotCookiebotDialogBodyLevelButtonLevelOptinAllowAll"]'
  );
  readonly buttonAllowSelection = this.container.locator(
    '//button[@id="CybotCookiebotDialogBodyLevelButtonLevelOptinAllowallSelection"]'
  );
  readonly buttonUseNecessaryOnly = this.container.locator(
    '//button[@id="CybotCookiebotDialogBodyButtonDecline"]'
  );
  readonly switcherFunctional = this.container.locator(
    '//input[@id="CybotCookiebotDialogBodyLevelButtonPreferences"]'
  );
  readonly switcherAnalytical = this.container.locator(
    '//input[@id="CybotCookiebotDialogBodyLevelButtonStatistics"]'
  );
  readonly switcherMarketing = this.container.locator(
    '//input[@id="CybotCookiebotDialogBodyLevelButtonMarketing"]'
  );

  /**
   * Closes Cookie dialog if it's visible by click on "Allow all button"
   */
  async closeIfVisible() {
    if (await this.buttonAllowAll.isVisible()) {
      await this.buttonAllowAll.click();
    }
  }
}
