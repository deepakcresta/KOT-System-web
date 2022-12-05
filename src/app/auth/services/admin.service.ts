import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class AdminService {
  baseUrl: string = environment.baseUrl;
  loginApiEndPoint: string = '/contact';
  registerApiEndPoint: string = '/customer';

  constructor(private httpClient: HttpClient) {}
  // Adding the contact of contact form to contact data base
  addUser(login: any): Observable<any> {
    return this.httpClient.post<any>(
      this.baseUrl.concat(this.loginApiEndPoint),
      login
    );
  }

  registerUser(register: any): Observable<any> {
    return this.httpClient.post<any>(
      this.baseUrl.concat(this.registerApiEndPoint),
      register
    );
  }
}
