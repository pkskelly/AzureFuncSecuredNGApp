import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { GolferComponent } from './golfer/golfer.component';
import { LoginCallbackComponent } from './login-callback/login-callback.component';
import { LoginCallbackModule } from './login-callback/login-callback.module';
import { AuthenticationModule } from './services/authentication.module';
import { ServicesModule } from './services/services.module';
import { GolferService } from './services/golfer.service';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    GolferComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AuthenticationModule,
    LoginCallbackModule,
    HttpModule,
    ServicesModule
  ],
  providers: [GolferService],
  bootstrap: [AppComponent]
})
export class AppModule { }
