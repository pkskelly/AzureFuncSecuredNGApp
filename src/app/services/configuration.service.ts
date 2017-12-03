import { Injectable } from '@angular/core';

@Injectable()
export class ConfigurationService {
    constructor() {
    }
        public get getConfiguration(): any {
        return {
            // instance: 'https://login.microsoftonline.com/',
            tenant: 'your tenant name',  //e.g. lastname.onmicrosoft.com
            tenantid: 'your tenant id',  //your tenant id
            clientId: 'your client / App Id', // your client id - or App Id
            redirectUri: window.location.origin + '/',
            postLogoutRedirectUri: window.location.origin + '/',
            endpoints: {
                /* 'target endpoint to be called': 'target endpoint's resource ID'  */
                // Custom Azure Function HTTP endpoint - sample below
                'https://securefuncapp8.azurewebsites.net/api': 'https://securefuncapp8.azurewebsites.net',
            },
            //sample service url
            serviceUrl: 'https://securefuncapp8.azurewebsites.net/api/GetGolfers',
        };
    }
}
