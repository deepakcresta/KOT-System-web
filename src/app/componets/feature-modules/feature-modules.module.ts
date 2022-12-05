import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FeatureModulesRoutingModule } from './feature-modules-routing.module';
import { FeatureModulesComponent } from './feature-modules.component';

@NgModule({
  declarations: [FeatureModulesComponent],
  imports: [CommonModule, FeatureModulesRoutingModule],
})
export class FeatureModulesModule {}
