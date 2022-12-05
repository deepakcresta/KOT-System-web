import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddMenuComponent } from './add-menu/add-menu.component';
import { AddSubmenuComponent } from './add-submenu/add-submenu.component';
import { EditMenuComponent } from './edit-menu/edit-menu.component';
import { EditSubmenuComponent } from './edit-submenu/edit-submenu.component';
import { MenuComponent } from './menu.component';
import { SubMenuComponent } from './sub-menu/sub-menu.component';

const routes: Routes = [
  { path: '',
   component: MenuComponent 
  }
  ,
  {
    path:'add-menu',
    component:AddMenuComponent
  },
  {
    path:'edit-menu',
    component:EditMenuComponent
  },
  {
    path:'add-submenu',
    component:AddSubmenuComponent
  },
  {
    path:'edit-submenu',
    component:EditSubmenuComponent
  },
  {
    path:'sub-menu',
    component:SubMenuComponent
  },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MenuRoutingModule { }
