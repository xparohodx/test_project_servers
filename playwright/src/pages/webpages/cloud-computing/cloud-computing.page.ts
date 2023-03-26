import { AccountInfoDialog } from "../../sections/accountInfoDialog.section";
import { DesktopPage } from "../desktop.page";

export class CloudComputingPage extends DesktopPage {
    url = () => `/cloud-computing`;

    readonly buttonShowCredentials = this.page.locator('//a[@title="Show credentials"]');
    readonly inputSearch = this.page.locator('//input[@class="i1ol8bi9"]');
    readonly buttonRefresh = this.page.locator('//button[@title="Refresh"]');
    readonly buttonCreateServer = this.page.locator('//a[@title="Create server"]');
    readonly buttonViewReport = this.page.locator('//a[@title="View report"]');

    readonly accountInfoDialog = new AccountInfoDialog(this.page.locator('//div[@aria-label="Please fill your account info"]'));

}