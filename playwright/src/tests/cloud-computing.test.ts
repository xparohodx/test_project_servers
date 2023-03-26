import { test, expect } from "./base.test";
import { ServerLocations } from "../data/servers_params";
import { AuthMethod } from "../data/servers_params";

const dataSets = [
    {
        name: 'with password, no backup',
        location: ServerLocations.az2,
        configuration: {

        }
    },
    {
        name: 'with password, backup, no IPv6',
        location: ServerLocations.dal,
        configuration: {
            backup: true,
            backupCopies: '7',
            networkFeatures: false
        }
    },
    {
        name: 'with new SSH key',
        location: ServerLocations.sj,
        configuration: {
            authMethod: AuthMethod.SSH,
            generateNewKey: true
        }
    }
]

dataSets.forEach(dataSet => {
    test.describe('Cloud computing servers tests', () => {
        test(`Create new cloud server, ${dataSet.name}`, async ({ page, cloudComputingPage, cloudComputingEditorPage, paymentMethodsPage }) => {

            //step 1 - open Cloud Servers page
            await cloudComputingPage.goto(cloudComputingPage.url());
            await cloudComputingPage.accountInfoDialog.closeIfVisible();

            //step 2 - click on "Create Server" button
            await cloudComputingPage.buttonCreateServer.click();
            await expect(page, 'Check redirect on correct page').toHaveURL(cloudComputingEditorPage.url());

            //step 3 - select server location
            await cloudComputingEditorPage.selectLocation(dataSet.location);
            const pageId = await cloudComputingEditorPage.getLocationId(dataSet.location);
            expect(page.url(), 'Assert that page has selected location Id').toContain(pageId);

            //step 4- set server parameters
            await cloudComputingEditorPage.setServerParameters(dataSet.configuration);

            //step 5 - click on "Save" button
            await cloudComputingEditorPage.buttonCreateCloudServer.click();
            await expect(page, 'Check redirect on payments page').toHaveURL(paymentMethodsPage.url());
        })
    })
})
