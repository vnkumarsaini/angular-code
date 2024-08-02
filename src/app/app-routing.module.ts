import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { EmployeeComponent } from './employee/employee.component';
import { ProfileComponent } from './profile/profile.component';
import { ChnagePasswordComponent } from './chnage-password/chnage-password.component';
import { RegisterComponent } from './register/register.component';

const routes: Routes = [
  {"path":"", redirectTo:"home",pathMatch:'full'},
  {"path":"home",component:HomeComponent},
  {"path":"employee",component:EmployeeComponent},
  {"path":"login",component:LoginComponent},
  {"path":"register",component:RegisterComponent},
  { path: 'profile', component: ProfileComponent },
  { path: 'changepassword', component: ChnagePasswordComponent }  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
