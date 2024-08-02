import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ChangePassword } from './change-password';

@Injectable({
  providedIn: 'root'
})
export class ChangePaswordService {
  // constructor(private http: HttpClient) {}

  // changePassword(passwordData: any): Observable<any> {
  //   return this.http.post('/api/user/change-password', passwordData);
  // }
  private baseUrl = 'https://localhost:7180/api/Account';

  constructor(private http: HttpClient) { }

  changePassword(changePassword: ChangePassword): Observable<any> {
    return this.http.post<any>(`${this.baseUrl}/changePassword`, changePassword);
  }

}
