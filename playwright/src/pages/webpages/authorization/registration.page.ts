import { DesktopPage } from "../desktop.page";

export class RegistrationPage extends DesktopPage {
    url = () => `/registration`;

    readonly inputEmail = this.page.locator('//input[@name="email"]');
    readonly checkboxTerms = this.page.locator('//input[@name="policy_and_terms"]');
    readonly checkboxNewsletter = this.page.locator('//input[@name="newsletters_subscription"]');
    readonly buttonJoin = this.page.locator('//button[@type="submit"]');
    readonly messageSuccess = this.page.locator('//span[@data-alert-level="success"]');
}