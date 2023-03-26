import { DesktopPage } from "../desktop.page";

export class LoginPage extends DesktopPage {
  url = () => `/login`;

  readonly inputEmail = this.page.locator('//input[@name="email"]');
  readonly inputPassword = this.page.locator('//input[@name="password"]');
  readonly buttonSignIn = this.page.locator('//button[@class="sv8lcon"]');
  readonly hrefJoin = this.page.locator('//a[@href="/registration"]');
  readonly hrefForgotPassword = this.page.locator('//a[@href="/password/forgot"]');
  readonly iconErrorForEmailInput = this.page.locator('//label[@for="email"]/following-sibling::div/span[@class="v1xpeu6y"]');
  readonly tooltipErrorForEmailInput = this.page.locator('//div[@id=":r0:"]');
  readonly iconErrorForPasswordInput = this.page.locator('//label[@for="password"]/following-sibling::div/span[@class="v1xpeu6y"]');
  readonly tooltipErrorForPasswordInput = this.page.locator('//div[@id=":r1:"]');

}
