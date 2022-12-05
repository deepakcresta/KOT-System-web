import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutUsComponent } from './about-us/about-us.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { HomeComponent } from './home/home.component';
import { OrderFormComponent } from './order-form/order-form.component';
import { OrderComponent } from './order/order.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { TodaysSpecialComponent } from './todays-special/todays-special.component';

const routes: Routes = [
  // {
  //   path: '',
  //   pathMatch: 'full',
  //   redirectTo: '',
  // },
  // {
  //   path:'order-item',
  //   component:OrderItemComponent
  // },

  {
    path: 'home',
    component: HomeComponent,
  },
  {
    path: 'order-food',
    component: OrderFormComponent,
  },
  {
    path: 'about-us',
    component: AboutUsComponent,
  },
  {
    path: 'contact-us',
    component: ContactUsComponent,
  },
  {
    path: 'todays-special',
    component: TodaysSpecialComponent,
  },
  {
    path: 'sidebar',
    component: SidebarComponent,
  },
  {
    path: 'order',
    component: OrderComponent,
  },

  {
    path: 'menu',
    loadChildren: () => import('./menu/menu.module').then((m) => m.MenuModule),
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ClientSideRoutingModule {}
