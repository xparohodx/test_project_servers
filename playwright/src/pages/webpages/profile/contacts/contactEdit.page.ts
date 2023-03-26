import { faker } from "@faker-js/faker";
import { DesktopPage } from "../../desktop.page";

export class ContactEditPage extends DesktopPage {
    url = (routes: { contactId: string }) => `/profile/contacts/${routes.contactId}/edit`;

    readonly inputFirstName = this.page.locator('//input[@name="fname"]');
    readonly inputLastName = this.page.locator('//input[@name="lname"]');
    readonly inputMiddleName = this.page.locator('//input[@name="tokens.middlename"]');
    readonly inputEmail = this.page.locator('//input[@name="email"]');
    readonly inputSecondaryEmail = this.page.locator('//input[@name="email2"]');
    readonly inputPhone = this.page.locator('//input[@name="phone_number"]');
    //readonly labelRole = this.page.locator('//div[@class="o1f4lk4c"]//label');
    readonly inputCompany = this.page.locator('//input[@name="tokens.company"]');
    readonly inputJobTitle = this.page.locator('//input[@name="tokens.title"]');
    readonly inputJobRole = this.page.locator('//input[@name="tokens.role"]');
    readonly inputNickname = this.page.locator('//input[@name="nickname"]');
    readonly inputComments = this.page.locator('//textarea[@name="tokens.note"]');
    readonly buttonAddMoreDetails = this.page.locator('//button[@title="Add more details"]');
    readonly inputDetailsType = this.page.locator('//input[@class="select__input"]');
    readonly inputDetailsValue = this.page.locator('//input[@name="contacts[0].value"]');
    readonly buttonSave = this.page.locator('//button[@title="Save"]');
    readonly buttonCancel = this.page.locator('//a[@title="Cancel"]');

    /**
     * Fills Contact form
     * @param form 
     * @returns 
     */
    async fillContactForm(form?: ContactFormType): Promise<ContactFormType> {
        const firstName = form?.firstName ?? faker.name.firstName();
        const lastName = form?.lastName ?? faker.name.lastName();
        const middleName = form?.middleName ?? faker.name.middleName();
        const email = form?.email ?? faker.internet.email(firstName, lastName);
        const secondaryEmail = form?.secondaryEmail ?? faker.internet.email(lastName, firstName);
        const phone = form?.phone ?? faker.phone.number('+1 (234) ###-##-##');
        const company = form?.company ?? 'Test Inc';
        const jobTitle = form?.jobTitle ?? 'Manager';
        const jobRole = form?.jobRoleType ?? 'Technical';
        const nickname = form?.nickname ?? 'Nickname_' + faker.random.numeric();
        const comment = form?.comment ?? faker.lorem.sentences(2);
        const detailsType = form?.detailsType ?? DetailsType.Fax;
        const detailsValue = form?.detailsValue ?? faker.phone.number('+2 (345) ###-##-##');

        await this.inputFirstName.fill(firstName);
        await this.inputLastName.fill(lastName);
        await this.inputMiddleName.fill(middleName);
        await this.inputEmail.fill(email);
        await this.inputSecondaryEmail.fill(secondaryEmail);
        await this.inputPhone.fill(phone);
        await this.page.locator(`//label[text()='${jobRole}']`).check();
        await this.inputCompany.fill(company);
        await this.inputJobTitle.fill(jobTitle);
        await this.inputJobRole.fill(jobRole);
        await this.inputNickname.fill(nickname);
        await this.inputComments.fill(comment);

        if (await this.inputDetailsType.isHidden()) {
            await this.buttonAddMoreDetails.click();
        }
        await this.inputDetailsType.fill(detailsType.toString());
        await this.inputDetailsValue.fill(detailsValue);


        return {
            firstName: firstName,
            lastName: lastName,
            middleName: middleName,
            email: email,
            secondaryEmail: secondaryEmail,
            phone: phone,
            company: company,
            jobTitle: jobTitle,
            jobRoleType: jobRole,
            nickname: nickname,
            comment: comment,
            detailsType: detailsType,
            detailsValue: detailsValue,
        }
    }

}

export type ContactFormType = {
    firstName?: string;
    lastName?: string;
    middleName?: string;
    email?: string;
    secondaryEmail?: string;
    phone?: string;
    company?: string;
    jobTitle?: string;
    jobRoleType?: string;
    nickname?: string;
    comment?: string;
    detailsType?: DetailsType;
    detailsValue?: string;
}

export enum DetailsType {
    'Home phone',
    'Work phone',
    'Cellphone',
    'Fax',
    'URL',
}