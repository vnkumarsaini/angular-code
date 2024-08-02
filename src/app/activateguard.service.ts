import { Injectable } from '@angular/core';
import { LoginService } from './login.service';
import { ActivatedRouteSnapshot, CanActivate, GuardResult, MaybeAsync, Router, RouterStateSnapshot } from '@angular/router';
import { JwtHelperService } from '@auth0/angular-jwt';

@Injectable({
  providedIn: 'root'
})
export class ActivateguardService implements CanActivate {
  constructor(private loginService:LoginService,private router:Router,private jwtHelperService:JwtHelperService) { }
  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): MaybeAsync<GuardResult> {
    if(this.loginService.IsAuthenticated()){
      return true;
     }
     else{
      alert('you are not authorized f*** s**');
      this.router.navigateByUrl("/login");
      return false;
     }
  }
}
