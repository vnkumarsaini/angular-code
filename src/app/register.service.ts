import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Register } from './register';
import { Observable, catchError, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RegisterService {
  // private registerUrl ='https://localhost:7180/api/Account/register';
  constructor(private http: HttpClient) { }

  register(user: Register): Observable<any> {
    return this.http.post<any>('https://localhost:7180/api/Account/Register',user);
  }

  
}
