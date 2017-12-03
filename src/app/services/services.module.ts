import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdalService } from './adal.service';
import { GolferService } from './golfer.service';
import { AuthenticatedGuard } from './authenticated.guard';
import { ConfigurationService } from './configuration.service';

@NgModule({
  imports: [CommonModule],

  declarations: [],
  providers: [
    AdalService,
    GolferService,
    AuthenticatedGuard,
    ConfigurationService
  ]
})
export class ServicesModule {}
