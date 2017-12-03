import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthHttp, AuthConfig } from 'angular2-jwt';
import { AdalService } from './../services/adal.service';
import { Http, RequestOptions } from '@angular/http';

export function AuthenticatedHttpServiceFactory(
  http: Http,
  options: RequestOptions
) {
  return new AuthHttp(
    new AuthConfig({
      tokenName: 'token',
      tokenGetter: () => localStorage.getItem('token'),
      globalHeaders: [{ 'Content-Type': 'application/json' }]
    }),
    http,
    options
  );
}

@NgModule({
  imports: [CommonModule],
  declarations: [],
  providers: [
    {
      provide: AuthHttp,
      useFactory: AuthenticatedHttpServiceFactory,
      deps: [Http, RequestOptions]
    }
  ]
})
export class AuthenticationModule {}
