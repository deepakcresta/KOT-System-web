import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MenuListResponseModel } from '../models/menu-list-response.model';
import { MenuService } from '../service/menu.service';

@Component({
  selector: 'app-menu-sidebar',
  templateUrl: './menu-sidebar.component.html',
  styleUrls: ['./menu-sidebar.component.scss'],
})
export class MenuSidebarComponent implements OnInit {
  menuResponse: Array<MenuListResponseModel> =
    new Array<MenuListResponseModel>();

  constructor(
    private router: Router, 
    private menuService: MenuService) {}

  ngOnInit(): void {
    this.listMenus();
  }

  listMenus() {
    this.menuService.listAllMenu().subscribe(
      (response: any) => {
        console.log('res: ', response);
        this.menuResponse = response.menus;
      },
      (error: any) => {
        console.error(error);
      }
    );
  }
}
