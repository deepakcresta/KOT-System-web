import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminConfigurationRoutingModule } from './admin-configuration-routing.module';
import { AdminConfigurationComponent } from './admin-configuration.component';


@NgModule({
  declarations: [
    AdminConfigurationComponent
  ],
  imports: [
    CommonModule,
    AdminConfigurationRoutingModule
  ]
})
export class AdminConfigurationModule { }
