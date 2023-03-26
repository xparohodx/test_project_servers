import { DesktopPage } from "../../desktop.page";
import { ContactFormType } from "../contacts/contactEdit.page";

export class ContactInfoPage extends DesktopPage {
    url = () => `/profile/contacts/`;

    readonly buttonEdit = this.page.locator('//button[@title="Edit"]');
    readonly buttonRefresh = this.page.locator('//button[@title="Refresh"]');

    readonly firstName = this.page.locator('//div[text()="First name"]/following-sibling::div//span//span');
    readonly lastName = this.page.locator('//div[text()="Last name"]/following-sibling::div//span//span');
    readonly middleName = this.page.locator('//div[text()="Middle name"]/following-sibling::div//span//span');
    readonly nickname = this.page.locator('//div[text()="Nickname"]/following-sibling::div//span//span');
    readonly email = this.page.locator('//div[text()="Email"]/following-sibling::div//span//div//a');
    readonly secondaryEmail = this.page.locator('//div[text()="Secondary email"]/following-sibling::div//span//div//a');
    readonly phoneNumber = this.page.locator('//div[text()="Phone number"]/following-sibling::div//span//span');
    readonly role = this.page.locator('//div[text()="Role"]/following-sibling::div//span//span//span');
    readonly company = this.page.locator('//div[text()="Company"]/following-sibling::div//span//span');
    readonly jobTitle = this.page.locator('//div[text()="Job title"]/following-sibling::div//span//span');
    readonly jobRole = this.page.locator('//div[text()="Job role"]/following-sibling::div//span//span');
    readonly comments = this.page.locator('//div[text()="Comments"]/following-sibling::div//span//p');

    /**
     * Takes a contact ID from URL of current page for further checking of redirects
     * @returns String contact id
     */
    getContactId(): String {
        const currentUrl = this.page.url().split('/');
        return currentUrl[currentUrl.length - 1] as string;
    }

    /**
     * Compares current Contact data with expected values after editing
     * @param expectedData - expected data on Contact info page
     * @returns true if all data matches / false if any data isn't matches
     */
    async checkContactData(expectedData: ContactFormType): Promise<boolean> {
        if (this.page.getByText(expectedData.firstName!) &&
            this.page.getByText(expectedData.lastName!) &&
            this.page.getByText(expectedData.middleName!) &&
            this.page.getByText(expectedData.email!) &&
            this.page.getByText(expectedData.secondaryEmail!) &&
            this.page.getByText(expectedData.company!) &&
            this.page.getByText(expectedData.phone!) &&
            this.page.getByText(expectedData.jobRoleType!) &&
            this.page.getByText(expectedData.jobTitle!) &&
            this.page.getByText(expectedData.nickname!) &&
            this.page.getByText(expectedData.comment!) &&
            this.page.getByText(expectedData.detailsType!.toString()) &&
            this.page.getByText(expectedData.detailsValue!)) {
            return true;
        } else {
            return false;
        }
    }
}