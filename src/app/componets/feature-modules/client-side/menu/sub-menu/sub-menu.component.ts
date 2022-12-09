import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MenuService } from '../service/menu.service';
import { SubMenuResponseListModel } from '../models/submenu-list-response-model';

@Component({
  selector: 'app-sub-menu',
  templateUrl: './sub-menu.component.html',
  styleUrls: ['./sub-menu.component.scss'],
})
export class SubMenuComponent implements OnInit {
  submenuResponse: Array<SubMenuResponseListModel> =
    new Array<SubMenuResponseListModel>();
  submenu: any;

  constructor(private router: Router, private submenuService: MenuService) {}

  ngOnInit(): void {
    this.listSubmenus();
  }

  listSubmenus() {
    this.submenuService.listAllSubmenu().subscribe(
      (response: any) => {
        console.log('res: ', response);
        this.submenuResponse = response.submenus;
      },
      (error: any) => {
        console.error(error);
      }
    );
  }

  order() {}
  orderFood() {
    this.router.navigate(['feature-modules/client-side/order-food']);
  }

  addSubMenu() {
    this.router.navigate(['feature-modules/client-side/menu/add-submenu']);
  }
}
