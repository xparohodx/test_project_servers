import { BaseSection } from "./baseSection.section";

export class HeaderSection extends BaseSection {

    readonly buttonSidebarToggle = this.container.locator('//button[@class="s1tvhopm"]');
    readonly inputSearch = this.container.locator('//input[@list="resultsList"]');
    readonly buttonCart = this.container.locator('//a[@href="/cart"]');
    readonly buttonUserMenu = this.container.locator('//div[@class="c1asuurm"]//button');
    readonly dropdownUserMenu = this.container.locator('//ul[@role="presentation"]');
    readonly buttonProfile = this.container.locator('//ul[@role="presentation"]//a[@href="/profile/info"]');
    readonly buttonLogout = this.container.locator('//ul[@role="presentation"]/li/button/span');
}