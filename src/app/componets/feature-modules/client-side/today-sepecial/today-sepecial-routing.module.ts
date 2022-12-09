import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddTodaySpecialComponent } from './add-today-special/add-today-special.component';
import { TodaySepecialComponent } from './today-sepecial.component';

const routes: Routes = [
  {
    path: '',
    component: TodaySepecialComponent,
  },
  {
    path: 'add',
    component: AddTodaySpecialComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TodaySepecialRoutingModule {}
