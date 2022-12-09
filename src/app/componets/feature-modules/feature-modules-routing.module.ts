import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FeatureModulesComponent } from './feature-modules.component';

const routes: Routes = [
  {
    path: '',
    component: FeatureModulesComponent,
  },
  {
    path: '',
    redirectTo: 'feature-modules',
    pathMatch: 'full',
  },
  {
    path: 'client-side',
    loadChildren: () =>
      import('./client-side/client-side.module').then(
        (m) => m.ClientSideModule
      ),
  },
  {
    path: 'admin-configuration',
    loadChildren: () =>
      import('./admin-configuration/admin-configuration.module').then(
        (m) => m.AdminConfigurationModule
      ),
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FeatureModulesRoutingModule {}
