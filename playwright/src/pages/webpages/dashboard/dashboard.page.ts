import { AccountInfoDialog } from "../../sections/accountInfoDialog.section";
import { DesktopPage } from "../desktop.page";

export class DashboardPage extends DesktopPage {
    url = () => `/dashboard`;

    readonly linkBalance = this.page.locator('//div[@class="bdbeyrz"]//a[@href="/billing/statement"]');
    readonly linkEstimatedNextBalance = this.page.locator('//div[@class="bdbeyrz"]//a[@href="/payment/pay"]');
    readonly linkServersInService = this.page.locator('//div[@class="bdbeyrz"]//a[@href="/servers"]');
}