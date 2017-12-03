import { ActivatedRoute, Router } from '@angular/router';
import { AdalService } from './../services/adal.service';
import { Component, OnInit } from '@angular/core';

@Component({
    templateUrl: './login.component.html'
})
export class LoginComponent implements OnInit {
    private returnUrl: string;
    public currentUser: any;
    public loginLogoutText = 'Login';

    constructor (
        private route: ActivatedRoute,
        private router: Router,
        private adalService: AdalService) { }

    ngOnInit() {
        this.currentUser = this.adalService.userInfo;
        console.log(this.currentUser);
        this.returnUrl = this.route.snapshot.queryParams['redirectUrl'] || '/';
        console.log('Returning to url : ' + this.returnUrl);
        this.setLoginLogoutText(this.isLoggedIn);
    }

    login() {
        this.adalService.login();
        console.log(this.adalService.userInfo);
        this.router.navigateByUrl(this.returnUrl);
    }

    logout() {
        this.adalService.logout();
    }

    public get isLoggedIn(): boolean {
      return !!this.adalService.isAuthenticated;
    }

    private setLoginLogoutText(loggedIn: boolean) {
      this.loginLogoutText = (loggedIn) ? 'Logout' : 'Login';
  }
}
