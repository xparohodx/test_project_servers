import { Locator } from "@playwright/test";

export class BaseSection {
  container: Locator;

  constructor(locator: Locator, index?: number) {
    if (index) {
      this.container = locator.nth(index);
    } else {
      this.container = locator.nth(0);
    }
  }
}
