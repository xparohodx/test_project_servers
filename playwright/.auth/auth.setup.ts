import { request } from '@playwright/test';
import { UserAuthData } from '../src/data/common';
import { baseURL } from '../../playwright.config'

const authFile = 'playwright/.auth/user.json';

async function globalSetup(config) {
    const requestContent = await request.newContext();
    await requestContent.post(`${baseURL}/auth/login`, {
        data: {
            'email': UserAuthData.email,
            'password': UserAuthData.password
        }
    });
    await requestContent.storageState({ path: authFile });
}

export default globalSetup;