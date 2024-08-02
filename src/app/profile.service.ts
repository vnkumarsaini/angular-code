import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Profile } from './profile';

@Injectable({
  providedIn: 'root'
})
export class ProfileService {
  // constructor(private http: HttpClient) {}

  // getUserProfile(): Observable<any> {
  //   return this.http.get('/api/user/profile');
  // }

  // updateUserProfile(profileData: any): Observable<any> {
  //   return this.http.put('/api/user/profile', profileData);
  // }
  private baseUrl = 'https://localhost:7180/api/Account';

  constructor(private http: HttpClient) { }

  updateProfile(updateProfile: Profile): Observable<any> {
    return this.http.put<any>(`${this.baseUrl}/updateProfile`, updateProfile);
  }
}
