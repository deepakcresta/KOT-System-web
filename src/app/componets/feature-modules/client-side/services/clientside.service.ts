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
  menuApiUrlEndPoint: string = 'menu';
  contactApiUrlEndPoint: string = 'contact';
  orderApiUrlEndPoint: string = 'order';
  orderFoodApiUrlEndpPoint: string = 'order';

  baseUrl: string = environment.baseUrl;
  constructor(private httpClient: HttpClient) {}
  // Adding the contact of contact form to contact data basea

  addContact(contact: any): Observable<any> {
    return this.httpClient.post<any>(
      this.baseUrl.concat(this.contactApiUrlEndPoint),
      contact
    );
  }
  //listing all the ordrs
  listAllOrder(): Observable<OrderListRsponseModel[]> {
    return this.httpClient.get<OrderListRsponseModel[]>(
      this.baseUrl.concat(this.orderApiUrlEndPoint)
    );
  }
  //ordering the food
  orderFood(order: any): Observable<any> {
    return this.httpClient.post<any>(
      this.baseUrl.concat(this.orderFoodApiUrlEndpPoint),
      order
    );
  }
}
