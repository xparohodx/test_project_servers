import { faker } from "@faker-js/faker";
import { Currencies } from "../../../data/common";
import { DesktopPage } from "../desktop.page";

export class ProfileEditPage extends DesktopPage {
    url = () => `/profile/info/edit`;

    readonly radioButtonPersonal = this.page.locator('//input[@name="business_type"][@value="0"]');
    readonly radioButtonBusiness = this.page.locator('//input[@name="business_type"][@value="1"]');
    readonly inputFirstName = this.page.locator('//h4[text()="First name"]/following-sibling::div//input[@type="text"]');
    readonly inputLastName = this.page.locator('//h4[text()="Last name"]/following-sibling::div//input[@type="text"]');
    readonly inputPhoneNumber = this.page.locator('//h4[contains(text(), "Phone number")]/following-sibling::div//input[@type="text"]');
    readonly inputEmail = this.page.locator('//h4[text()="Email"]/following-sibling::div//input[@type="text"]');
    readonly inputCountry = this.page.locator('//input[@class="select__input"]');
    readonly inputCity = this.page.locator('//input[@name="billing_address_city"]');
    readonly inputRegion = this.page.locator('//input[@name="billing_address_region"]');
    readonly inputPostalCode = this.page.locator('//input[@name="billing_address_postalcode"]');
    readonly inputStreet = this.page.locator('//input[@name="billing_address_street"]');
    readonly buttonSave = this.page.locator('//button[@title="Save"]');
    readonly buttonCancel = this.page.locator('//button[@title="Cancel"]');

    /**
     * Fills Profile info with given data
     * @param form 
     */
    async fillProfileInfo(form?: ProfileInfoType) {
        const isBusiness = form?.isBusiness ?? false;
        const currency = form?.currency ?? Currencies.USD;
        const firstName = form?.firstName ?? faker.name.firstName();
        const lastName = form?.lastName ?? faker.name.lastName();
        const phone = form?.phone ?? faker.phone.number('+1 (456) ###-##-##');
        const country = form?.country ?? 'Cyprus';
        const city = form?.country ?? 'Limassol';
        const postalCode = form?.postalCode ?? '11011';
        const street = form?.street ?? 'Thesalonikis';
        const companyName = form?.companyName ?? faker.company.name();

        await this.page.locator(`//input[@value="${currency}"]`).click();
        await this.inputFirstName.fill(firstName);
        await this.inputLastName.fill(lastName);
        await this.inputPhoneNumber.fill(phone);
        await this.inputCountry.fill(country);
        await this.inputCountry.press('Enter');
        await this.inputCity.fill(city);
        await this.inputPostalCode.fill(postalCode);
        await this.inputStreet.fill(street);
        if (isBusiness) {
            await this.radioButtonBusiness.click();
            await this.page.locator('//input[@name="name"]').fill(companyName);
        }

    }
}

export type ProfileInfoType = {
    isBusiness?: boolean,
    companyName?: string,
    currency?: Currencies,
    firstName?: string,
    lastName?: string,
    phone?: string,
    country?: string,
    city?: string,
    region?: string,
    postalCode?: string,
    street?: string
}