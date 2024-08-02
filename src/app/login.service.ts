import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Login } from './login';
import { Observable, map } from 'rxjs';
import { Router } from '@angular/router';
import { JwtHelperService } from '@auth0/angular-jwt';
import { Token } from '@angular/compiler';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  currentUserName:string="";
  constructor(private httpclient : HttpClient,public router:Router,private jwtHelperService:JwtHelperService) { }
  private URL='https://localhost:7180/api/Account/authenticate';

  checkUser(user:Login):Observable<any>{
    return this.httpclient.post<any>(this.URL,user).pipe(map(u=>{
      if(u){
        this.currentUserName=u.username;
        sessionStorage['currentUser']=JSON.stringify(u);
      }
      return null;
    }))
  }
  LogOut(){
    this.currentUserName="";
    sessionStorage.clear();
    this.router.navigateByUrl("/login");
  }
  public IsAuthenticated():boolean{
    if(this.jwtHelperService.isTokenExpired()){
      return false;
    }
    else{
      return true;
    }
  }
}
