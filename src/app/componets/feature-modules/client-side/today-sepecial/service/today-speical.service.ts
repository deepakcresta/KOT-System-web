import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { TodaySpecialListResponseModel } from '../models/today-special-list-response.model';

@Injectable({
  providedIn: 'root',
})
export class TodaySpeicalService {
  baseUrl: string = environment.baseUrl;
  todaySpecialApiEndPoint: string = 'special';

  constructor(private httpClient: HttpClient) {}
  listTodaySpecial(): Observable<TodaySpecialListResponseModel[]> {
    return this.httpClient.get<TodaySpecialListResponseModel[]>(
      this.baseUrl.concat(this.todaySpecialApiEndPoint)
    );
  }
  addTodaySpecial(
    todaySpecaial: any
  ): Observable<TodaySpecialListResponseModel[]> {
    return this.httpClient.post<TodaySpecialListResponseModel[]>(
      this.baseUrl.concat(this.todaySpecialApiEndPoint),
      todaySpecaial
    );
  }
}
