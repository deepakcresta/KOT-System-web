import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ClientSideRoutingModule } from './client-side-routing.module';
import { ClientSideComponent } from './client-side.component';
import { HomeComponent } from './home/home.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SidebarComponent } from './sidebar/sidebar.component';

import { MatMenuModule } from '@angular/material/menu';
import { MatIconModule } from '@angular/material/icon';
import { MatDividerModule } from '@angular/material/divider';
import { MatListModule } from '@angular/material/list';
import { MatToolbarModule } from '@angular/material/toolbar';
import { OrderComponent } from './order/order.component';
import { OrderFormComponent } from './order-form/order-form.component';

@NgModule({
  declarations: [
    ClientSideComponent,
    HomeComponent,
    ContactUsComponent,
    AboutUsComponent,
    SidebarComponent,
    OrderComponent,
    OrderFormComponent,
  ],
  imports: [
    CommonModule,
    ClientSideRoutingModule,
    ReactiveFormsModule,
    MatDividerModule,
    MatIconModule,
    MatListModule,
    MatMenuModule,
    MatToolbarModule,
    FormsModule,
  ],
})
export class ClientSideModule {}
