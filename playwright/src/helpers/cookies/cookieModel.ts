import config from "../../../../playwright.config";

export class Cookie {
    name: string;
    value: string;
    domain: string;
    path: string;
    secure: boolean

    constructor(name: string, value: string, domain?: string, path?: string, expires?: number, secure?: boolean) {
        if (domain) {
            this.domain = domain;
        } else {
            const baseUrl = config.use?.baseURL;
            if (!baseUrl) {
                throw Error('baseUrl has not been specified. Please check playwright.config');
            }

            const domain = new URL(baseUrl);
            this.domain = '.' + domain.host;
        }

        var date = new Date();
        date.setHours(date.getHours() + 1);

        this.name = name;
        this.value = value;
        this.domain = domain ?? config.use?.baseURL!;
        this.path = path ?? '/';
        this.secure = secure ?? true;
    }
}