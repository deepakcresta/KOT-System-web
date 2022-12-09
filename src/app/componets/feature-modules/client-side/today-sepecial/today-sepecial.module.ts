import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TodaySepecialRoutingModule } from './today-sepecial-routing.module';
import { TodaySepecialComponent } from './today-sepecial.component';
import { AddTodaySpecialComponent } from './add-today-special/add-today-special.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [TodaySepecialComponent, AddTodaySpecialComponent],
  imports: [CommonModule, TodaySepecialRoutingModule, ReactiveFormsModule],
})
export class TodaySepecialModule {}
