import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminConfigurationComponent } from './admin-configuration.component';

const routes: Routes = [
  {
    path: '',
    component: AdminConfigurationComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AdminConfigurationRoutingModule {}
