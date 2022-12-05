import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { MenuListResponseModel } from '../menu/models/menu-list-response.model';
import { ItemModel } from '../models/item.model';
import { OrderListRsponseModel } from '../models/order-list-response.model';

@Injectable({
  providedIn: 'root',
})
export class ClientService {
  menuApiUrlEndPoint: string = '/menu';
  contactApiUrlEndPoint: string = 'contact';
  orderApiUrlEndPoint: string = 'order';

  onOrderItem(): Observable<ItemModel> {
    throw new Error('Method not implemented.');
  }

  editItem({ item }: { item: any }): void {
    throw new Error('Method not implemented.');
  }

  baseUrl: string = environment.baseUrl;
  constructor(private httpClient: HttpClient) {}
  // Adding the contact of contact form to contact data basea

  addContact(contact: any): Observable<any> {
    return this.httpClient.post<any>(
      this.baseUrl.concat(this.contactApiUrlEndPoint),
      contact
    );
   
  }
  
  //adding and editing the main  menu

  addMenu(item: ItemModel) {
    return this.httpClient.post<ItemModel>(
      this.baseUrl.concat(this.menuApiUrlEndPoint),
      item
    );
  }
  //listing the all menu
  listAllMenu(): Observable<MenuListResponseModel[]> {
    return this.httpClient.get<MenuListResponseModel[]>(
      this.baseUrl.concat(this.menuApiUrlEndPoint)
    );
  }
  //listing all the ordrs
  listAllOrder(): Observable<OrderListRsponseModel[]> {
    return this.httpClient.get<OrderListRsponseModel[]>(
      this.baseUrl.concat(this.orderApiUrlEndPoint),
    
    );
  }
}
