import { test, expect } from "./base.test";

test.describe('Profile contacts tests', () => {
    test('Create new contact', async ({ contactsPage, page, contactNewPage, contactInfoPage }) => {
        //step 1 - open Contacts page
        await contactsPage.goto(contactsPage.url());

        //step 2 - click on "Create" button 
        await contactsPage.buttonCreate.click();
        await expect(page, 'Check redirect to New contact page').toHaveURL(contactNewPage.url());

        //step 3 - fill all Contact fields
        await contactNewPage.fillContactForm();

        //step 4 - click on "Create" button
        await contactNewPage.buttonCreate.click();
        expect(page.url(), 'Check redirect to Contact Info page').toContain(contactInfoPage.url());
        await expect(contactInfoPage.alertSuccess, 'Alert about successfull operation is visible').toBeVisible();
    });

    test('Edit contact', async ({ contactsPage, page, contactInfoPage, contactEditPage }) => {
        //step 1 - open Contacts page
        await contactsPage.goto(contactsPage.url());
        await contactsPage.page.waitForSelector('//div[@class="t1y3tdmf"]');

        //step 2 - click on Contact
        await (await contactsPage.findLastContact()).click();
        expect(page.url(), 'Check redirect to Contact Info page').toContain(contactInfoPage.url());
        const contactId = contactInfoPage.getContactId();

        //step 3 - click on "Edit" button
        await contactInfoPage.buttonEdit.click();
        await expect(page, 'Check redirect to Contact Edit page').toHaveURL(contactEditPage.url({ contactId: `${contactId}` }));

        //step 4 - edit all field
        const expectedData = await contactEditPage.fillContactForm();

        //step 5 - click on "Save" button
        await contactEditPage.buttonSave.click();
        expect(page.url(), 'Check redirect to Contact Info page').toContain(contactInfoPage.url());
        await expect(contactInfoPage.alertSuccess, 'Alert about successfull operation is visible').toBeVisible();

        //step 6 - compare current contact's data with data specified on step 4
        expect(contactInfoPage.checkContactData(expectedData), 'Check data after editing').toBeTruthy();
    });

    test('Delete contact', async ({ contactsPage }) => {
        //step 1 - open contacts page
        await contactsPage.goto(contactsPage.url());
        await contactsPage.page.waitForSelector('//div[@class="t1y3tdmf"]');

        //step 2 - click on "Delete" button for contact from list
        const contactToDelete = await contactsPage.findLastContact();
        await contactsPage.clickDeleteContact(contactToDelete);

        //step 3 - confirm deleting
        await expect(contactsPage.dialogDeleteConfirm.container, 'Assert that confirmation pop-up is visible').toBeVisible();
        await contactsPage.dialogDeleteConfirm.buttonDelete.click();

        //step 4 - assert that contact was deleted
        await expect(contactsPage.alertSuccess, 'Alert about successfuell opertaion is visible').toBeVisible();
        await expect(contactToDelete, 'Assert that contact was deleted').toBeHidden();
    })
})

