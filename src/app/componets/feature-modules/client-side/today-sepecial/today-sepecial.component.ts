import { Component, OnInit } from '@angular/core';
import { Route, Router } from '@angular/router';
import { TodaySpecialListResponseModel } from './models/today-special-list-response.model';
import { TodaySpeicalService } from './service/today-speical.service';

@Component({
  selector: 'app-today-sepecial',
  templateUrl: './today-sepecial.component.html',
  styleUrls: ['./today-sepecial.component.scss'],
})
export class TodaySepecialComponent implements OnInit {
  todaySpecialList: Array<TodaySpecialListResponseModel> =
    new Array<TodaySpecialListResponseModel>();

  constructor(
    private router: Router,
    private todayspeicalService: TodaySpeicalService
  ) {}

  ngOnInit(): void {
    this.listOnTodaySpecial();
  }
  onAddTodaySpecial() {
    this.router.navigate(['feature-modules/client-side/order-food']);
  }
  onOrderTodaySpecial() {
    this.router.navigate(['feature-modules/client-side/order-food']);
  }

  listOnTodaySpecial() {
    this.todayspeicalService.listTodaySpecial().subscribe(
      (response: any) => {
        this.todaySpecialList = response?.todaySpecials;
        console.log(response);
      },
      (error: any) => {
        console.log(error);
      }
    );
  }
}
