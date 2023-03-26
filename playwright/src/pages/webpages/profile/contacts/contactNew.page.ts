import { ContactEditPage } from "./contactEdit.page";

export class ContactNewPage extends ContactEditPage {
    url = () => `/profile/contacts/new`;

    readonly buttonCreate = this.page.locator('//button[@title="Create"]');

}