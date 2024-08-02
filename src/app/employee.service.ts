import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Employee } from './employee';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
  constructor(private httpClient:HttpClient) { }
  private BaseUrl='https://localhost:7180/api/Employee';

  getAllEmployeea():Observable<any>{
    return this.httpClient.get<any>(this.BaseUrl);
  }
  SaveEmployees(employee:Employee):Observable<any>{
    return this.httpClient.post<any>(this.BaseUrl,employee);
  }
  UpdateEmployees(employee:Employee):Observable<any>{
    return this.httpClient.put<any>(this.BaseUrl,employee);
  }
  deleteEmployee(id:number):Observable<any>{
    return this.httpClient.delete<any>("https://localhost:7180/api/Employee/"+id);
  }
}
