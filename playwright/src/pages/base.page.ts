import { type Page } from "@playwright/test";
import { CookieConsent } from '../helpers/cookies/cookiesValues';
import { Cookie } from "../helpers/cookies/cookieModel";

type RoutesType = Record<string, string>;

export abstract class BasePage {
  page: Page;
  abstract url(routes?: RoutesType): string;

  constructor(page: Page) {
    this.page = page;
    this.page.context().addCookies([
      new Cookie(CookieConsent.name, CookieConsent.value, CookieConsent.domain)
    ]);
  }

  /**
   * Opens page by URL
   * @param url  - page URL
   */
  async goto(url: string) {
    await this.page.goto(url);
  }
}