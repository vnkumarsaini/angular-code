import { Component } from '@angular/core';
import { LoginService } from '../login.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
  constructor(private loginService:LoginService){}
  ngOnInit(){
    if(sessionStorage.getItem('currentUser')!=null){
      this.loginService.currentUserName="not_empty";
    }
  }
}
