import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MenuRoutingModule } from './menu-routing.module';
import { SubMenuComponent } from './sub-menu/sub-menu.component';
import { ReactiveFormsModule } from '@angular/forms';
import { AddMenuComponent } from './add-menu/add-menu.component';
import { EditMenuComponent } from './edit-menu/edit-menu.component';
import { AddSubmenuComponent } from './add-submenu/add-submenu.component';
import { EditSubmenuComponent } from './edit-submenu/edit-submenu.component';
import { MenuComponent } from './menu.component';
import { MenuSidebarComponent } from './menu-sidebar/menu-sidebar.component';

@NgModule({
  declarations: [
    SubMenuComponent,
    AddMenuComponent,
    EditMenuComponent,
    AddSubmenuComponent,
    EditSubmenuComponent,
    MenuComponent,
    MenuSidebarComponent,
  ],
  imports: [CommonModule, MenuRoutingModule, ReactiveFormsModule],
})
export class MenuModule {}
