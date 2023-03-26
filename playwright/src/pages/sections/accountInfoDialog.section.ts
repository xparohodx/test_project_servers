import { BaseSection } from "./baseSection.section";

export class AccountInfoDialog extends BaseSection {
    readonly buttonCloseDialog = this.container.locator('//header//button');

    /**
     * Close account info dialog if it's visible
     */
    async closeIfVisible() {
        if (await this.buttonCloseDialog.isVisible()) {
            await this.buttonCloseDialog.click();
        }
    }
}

