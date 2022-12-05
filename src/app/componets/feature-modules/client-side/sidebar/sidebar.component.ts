import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {

  sidebarMenus: Array<any> = new Array<any>(
    {
      name: 'add-menu',
      icon: 'photo',
      url: '/client-side/menu/add-item',
    },
    {
      name: 'edit-menu',
      icon: 'photo',
      url: '/user-dashboard',
    },
    {
      name: 'Add-Submenu',
      icon: 'photo',
      url: '/client-side/booking',
    },
    {
      name: 'Edit-Submenu',
      icon: 'photo',
      url: '/client-side/booking',
    },
  );

  constructor() { }

  ngOnInit(): void {
  }

}
