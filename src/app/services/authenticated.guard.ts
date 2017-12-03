import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router, NavigationExtras } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { AdalService } from './adal.service';

@Injectable()
export class AuthenticatedGuard implements CanActivate {

  constructor(private router: Router, private adalService: AdalService) { }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
    const navigationExtras: NavigationExtras = {
      queryParams: { 'redirectUrl': route.url }
    };

    if (!this.adalService.userInfo) {
      this.router.navigate(['login'], navigationExtras);
    }

    return true;
  }
}
