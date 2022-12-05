import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ClientService } from '../services/clientside.service';
import { OrderListRsponseModel } from '../models/order-list-response.model';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.scss'],
})
export class OrderComponent implements OnInit {
  orderResponse: Array<OrderListRsponseModel> =
    new Array<OrderListRsponseModel>();

  // orderResponse1=[
  //   {
  //     id:'1',
  //     tabledNo:'12',
  //     quantity:'12',
  //     orderName:'momo',
  //     time:''      }
  // ]

  constructor(private router: Router, private orderService: ClientService) {}

  ngOnInit(): void {
    this.listOrders();
  }

  listOrders() {
    console.log(this.orderResponse);
    this.orderService.listAllOrder().subscribe(
      (response: any) => {
        this.orderResponse = response?.orders;
        console.log(response);
      },
      (error: any) => {
        console.error(error);
      }
    );
  }
}
