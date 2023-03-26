import { DesktopPage } from "../desktop.page";

export class PaymentMethodsPage extends DesktopPage {
    url = () => `/payment/methods`;

    readonly checkboxAgreement = this.page.locator('//input[@type="checkbox"]');
    readonly buttonAddNewCard = this.page.locator('//button[@title="Add new card"]');
}