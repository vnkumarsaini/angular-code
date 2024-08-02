import { Component } from '@angular/core';
import { LoginService } from '../login.service';
import { Router } from '@angular/router';
import { Login } from '../login';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {
  constructor(private loginService : LoginService,private router:Router){
  }
  login = new Login();
  loginClick(){
    this.loginService.checkUser(this.login).subscribe(
      (response)=>{
          this.router.navigateByUrl("/home");
      },
      (error)=>{
        alert("Wong username and Password");
      }
    )
    
  }

}
