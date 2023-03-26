import { Locator } from "@playwright/test";
import { BaseSection } from "../../../sections/baseSection.section";
import { DesktopPage } from "../../desktop.page";

export class ContactsPage extends DesktopPage {
    url = () => `/profile/contacts`;

    readonly inputSearch = this.page.locator('//input[@class="i1ol8bi9"]');
    readonly dropdownRole = this.page.locator('//div[contains(@class, "select__value-container")]');
    readonly buttonRefresh = this.page.locator('//button[@title="Refresh"]');
    readonly buttonCreate = this.page.locator('//a[@title="Create"]');

    readonly dialogDeleteConfirm = new DeleteConfirmDialog(this.page.locator('//div[@aria-label="Confirmation"]'));

    /**
     * There was no specifications about how we should select contact to edit/delete,
     * so this function takes a locator of final element from contacts list.
     * It can be modified for serach contact by any parameter, if it would be necessary.
     * @returns locator of final element of contact list
     */
    async findLastContact(): Promise<Locator> {
        const contactRows = await this.page.locator('//tr[@href]').all();
        if (contactRows.length > 0) {
            return contactRows[contactRows.length - 1];

        } else { throw new Error("Empty contacts table"); }
    }

    /**
     * Clicks a "Delete" button for contact row we want to delete.
     * @row - contact row we want to delete
     */
    async clickDeleteContact(contactRow: Locator) {
        await contactRow.getByRole('button').click();
    }
}

class DeleteConfirmDialog extends BaseSection {
    readonly buttonDelete = this.container.locator('//button[@title="Delete"]');
    readonly buttonCancel = this.container.locator('//button[@title="Cancel"]');
    readonly buttonClose = this.container.locator('//button[@aria-labelledby=":r3:"]');
}