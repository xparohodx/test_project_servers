import { OSImages, Configurations, AuthMethod } from "../../../data/servers_params";
import { faker } from "@faker-js/faker";
import { BaseSection } from "../../sections/baseSection.section";
import { test_SSH } from "../../../data/common";
import { DesktopPage } from "../desktop.page";

export class CloudComputingEditorPage extends DesktopPage {
    url = () => `/cloud-computing/editor`;

    readonly inputName = this.page.locator('//input[@name="name"]');
    readonly radioBackupEnabled = this.page.locator('//input[@name="backup_enabled"][@value="true"]');
    readonly radioBackupDisabled = this.page.locator('//input[@name="backup_enabled"][@value="false"]');
    readonly inputBackupCopies = this.page.locator('//input[@name="backup_copies"]');
    readonly checkboxNetworkFeatures = this.page.locator('//input[@name="ipv6_enabled"]');
    readonly checkboxPassword = this.page.locator('//input[@value="password"]');
    readonly checkboxSSH = this.page.locator('//input[@value="ssh_key"]');
    readonly buttonAddExistingSSHKey = this.page.locator('//button[@title="Add existing SSH key"]');
    readonly buttonGenerateNewSSHKey = this.page.locator('//button[@title="Generate new SSH key"]');

    readonly buttonCreateCloudServer = this.page.locator('//button[@title="Create Cloud Server"]');

    readonly dialogAddSSHKey = new AddSSHKeyDialog(this.page.locator('//div[@aria-label="Add existing SSH key"]'));


    /**
     * Select given location
     * @param location - location from servers_params.ts -> ServerLocations
     */
    async selectLocation(location: string) {
        await this.page.locator(`//span[text()="${location}"]`).click();
    }

    /**
     * Gets ID of selected location to further check of corrrect redirect
     * @param location - selected location
     * @returns 
     */
    async getLocationId(location: string): Promise<string> {
        const locator = this.page.locator(`//span[text()="${location}"]//ancestor::label//input`);
        const id = String(await locator.getAttribute('value'));
        return '?location_id=' + id;
    }

    /**
     * Set Server parameters with given set
     * @param parameters - data set of ServerParametersType 
     * @returns 
     */
    async setServerParameters(parameters?: ServerParametersType): Promise<ServerParametersType> {
        const OS = parameters?.OS ?? OSImages.debian10;
        const configuration = parameters?.configuration ?? Configurations.SSD_50;
        const authMethod = parameters?.authMethod ?? AuthMethod.PASSWORD;
        const addExistingKey = parameters?.addExistingKey ?? false;
        const generateNewKey = parameters?.generateNewKey ?? false;
        const backup = parameters?.backup ?? false;
        const backupCopies = parameters?.backupCopies ?? '7';
        const networkFeatures = parameters?.networkFeatures ?? true;
        const name = parameters?.name ?? 'Default test name ' + faker.random.numeric();

        await this.page.locator(`//h4[contains(text(), "${OS}")]/ancestor::label`).click();
        await this.page.locator(`//div//h4[contains(text(), "${configuration}")]`).click();

        if (authMethod == AuthMethod.PASSWORD) {
            await this.checkboxPassword.check();
            await this.checkboxSSH.uncheck();
        }

        if (authMethod == AuthMethod.SSH && addExistingKey) { await this.addExistingSSHKey(); }
        else if (authMethod == AuthMethod.SSH && generateNewKey) { await this.generateNewSSHKey(); }

        if (authMethod == AuthMethod.PASS_AND_SSH) {
            await this.checkboxPassword.check();
            if (addExistingKey) { await this.addExistingSSHKey(); }
            if (generateNewKey) { { await this.generateNewSSHKey(); } }
        }

        if (backup) {
            await this.radioBackupEnabled.check();
            await this.inputBackupCopies.fill(backupCopies);
        } else { await this.radioBackupDisabled.check(); }

        if (networkFeatures) { await this.checkboxNetworkFeatures.check(); }
        await this.inputName.fill(name);

        return {
            OS: OS,
            configuration: configuration,
            authMethod: authMethod,
            backup: backup,
            networkFeatures: networkFeatures,
            name: name
        }
    }

    /**
     * Adding and selecting existing SSH key
     */
    async addExistingSSHKey() {
        await this.buttonAddExistingSSHKey.click();
        await this.dialogAddSSHKey.inputName.fill('test_key_' + faker.random.numeric());
        await this.dialogAddSSHKey.inputKey.fill(test_SSH);
        await this.dialogAddSSHKey.buttonAdd.click();
        await this.page.waitForLoadState('networkidle');
        const inputDefaultFingerPrint = await this.page.locator('//input[@name="ssh_key_fingerprint"]').all();
        await inputDefaultFingerPrint.at(0)!.click();
    }

    /**
     * Generating and selecting new SSH key
     */
    async generateNewSSHKey() {
        await this.buttonGenerateNewSSHKey.click();
        const inputDefaultFingerPrint = await this.page.locator('//input[@name="ssh_key_fingerprint"]').all();
        await inputDefaultFingerPrint.at(0)!.click();
    }
}

export type ServerParametersType = {
    OS?: string;
    configuration?: string;
    authMethod?: AuthMethod;
    addExistingKey?: boolean;
    generateNewKey?: boolean;
    backup?: boolean;
    backupCopies?: string;
    networkFeatures?: boolean;
    name?: string;
}

class AddSSHKeyDialog extends BaseSection {
    readonly inputName = this.container.locator('//input[@name="name"]');
    readonly inputKey = this.container.locator('//textarea[@name="publicKey"]');
    readonly buttonAdd = this.container.locator('//button[@title="Add"]');
    readonly buttonCancel = this.container.locator('//button[@title="Cancel"]');
}