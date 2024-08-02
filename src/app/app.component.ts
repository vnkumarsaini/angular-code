import { LoginService } from './login.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'Angular_withJWT2';
  constructor(public loginService:LoginService){}
  LogoutClick(){
    this.loginService.LogOut();
  }
  getUserName() {
    return this.loginService.currentUserName;
  }
}
