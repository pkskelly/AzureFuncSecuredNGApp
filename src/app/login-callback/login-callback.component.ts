import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { AdalService } from '../services/adal.service';

@Component({
    template: '<div>Please wait...</div>'
})
export class LoginCallbackComponent implements OnInit {
    constructor(private router: Router, private adalService: AdalService) {

    }

    ngOnInit() {
        if (!this.adalService.userInfo) {
            this.router.navigate(['login']);
        } else {
            this.router.navigate(['home']);
        }
    }
}
