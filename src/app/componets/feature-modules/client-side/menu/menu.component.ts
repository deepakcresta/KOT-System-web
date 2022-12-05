import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MenuListResponseModel } from './models/menu-list-response.model';
import { MenuService } from './service/menu.service';

@Component({
  selector: ' ',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss'],
})
export class MenuComponent implements OnInit {
  menuResponse: Array<MenuListResponseModel> =
    new Array<MenuListResponseModel>();

  constructor(private router: Router, private menuService: MenuService) {}

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
