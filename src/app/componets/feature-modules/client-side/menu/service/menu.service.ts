import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { MenuListResponseModel } from '../models/menu-list-response.model';
import { SubMenuResponseListModel } from '../models/submenu-list-response-model';

@Injectable({
  providedIn: 'root',
})
export class MenuService {
  menuApiUrlEndPoint: string = 'menu';
  submenuApiUrlEndPoint: string = 'menu/submenu';
  baseUrl: string = environment.baseUrl;

  constructor(private httpClient: HttpClient) {}

  listAllMenu(): Observable<MenuListResponseModel[]> {
    return this.httpClient.get<MenuListResponseModel[]>(
      this.baseUrl.concat(this.menuApiUrlEndPoint)
    );
  }
  listAllSubmenu(): Observable<SubMenuResponseListModel[]> {
    return this.httpClient.get<SubMenuResponseListModel[]>(
      this.baseUrl.concat(this.submenuApiUrlEndPoint)
    );
  }
}
