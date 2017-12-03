import { ConfigurationService } from './configuration.service';
import { Injectable } from '@angular/core';
import 'expose-loader?AuthenticationContext!../../../node_modules/adal-angular/lib/adal.js';
import { Observable } from 'rxjs/Observable';
const createAuthContextFn: adal.AuthenticationContextStatic = AuthenticationContext;

@Injectable()
export class AdalService {

    private context: adal.AuthenticationContext;
    constructor(private configService: ConfigurationService) {
        this.context = new createAuthContextFn(configService.getConfiguration);
    }

    login() {
        this.context.login();
    }

    logout() {
        this.context.logOut();
    }

    handleCallback() {
        this.context.handleWindowCallback();
    }

    public get userInfo() {
        return this.context.getCachedUser();
    }

    public get accessToken() {
        return this.context.getCachedToken(this.configService.getConfiguration.clientId);
    }

    public get isAuthenticated() {
        return this.userInfo && this.accessToken;
    }
}
