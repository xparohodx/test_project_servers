import { BaseSection } from "./baseSection.section";

export class SidebarSection extends BaseSection {

    readonly linkNetworks = this.container.locator('//li//i[@title="Networks"]/ancestor::span');
    readonly submenuNetworks = this.container.locator('//li//i[@title="Networks"]/ancestor::span/following-sibling::ul');

    readonly linkBilling = this.container.locator('//li//i[@title="Billing"]/ancestor::span');
    readonly submenuBilling = this.container.locator('//li//i[@title="Billing"]/ancestor::span/following-sibling::ul');
    readonly linkPaymentDetails = this.container.locator('//a[@href="/payment/methods"]');

    /**
     * Assert that sidebar menu is collapsed
     * @returns true if collapsed
     */
    async assertSidebarIsCollapsed(): Promise<boolean> {
        const state = String(await this.container.getAttribute('class'));
        return state.includes('cao2qd1');
    }

    /**
     * Assert that sidebar menu is expanded
     * @returns true if expanded
     */
    async assertSidebarIsExpanded(): Promise<boolean> {
        const state = String(await this.container.getAttribute('class'));
        return state.includes('f13zo3hv');
    }
}