import { BasePage } from "../base.page";
import { HeaderSection } from "../sections/header.section";
import { CookiesDialog } from "../sections/cookiesDialog.section";
import { SidebarSection } from "../sections/sidebar.section";
import { AccountInfoDialog } from "../sections/accountInfoDialog.section";

export abstract class DesktopPage extends BasePage {
    readonly alertSuccess = this.page.locator('//iframe[@src]');

    readonly headerSection = new HeaderSection(this.page.locator('//div[@class="n1765slf"]'));
    readonly cookiesDialog = new CookiesDialog(this.page.locator('//div[@class="CybotCookiebotDialogContentWrapper"]'));
    readonly sidebarSection = new SidebarSection(this.page.locator('//div[contains(@class, "s1fw6rty")]'));
    readonly accountInfoDialog = new AccountInfoDialog(this.page.locator('//div[@aria-label="Please fill your account info"]'));
}