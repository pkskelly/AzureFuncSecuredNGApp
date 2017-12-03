import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginCallbackComponent } from './login-callback.component';
import { LoginCallbackGuard } from './login-callback.guard';


@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [LoginCallbackComponent],
  providers: [LoginCallbackGuard]
})
export class LoginCallbackModule { }
