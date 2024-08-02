import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { EmployeeComponent } from './employee/employee.component';
import { LoginComponent } from './login/login.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { JwtModule } from '@auth0/angular-jwt';
import { HTTP_INTERCEPTORS, HttpClient, HttpClientModule, provideHttpClient, withInterceptorsFromDi } from '@angular/common/http';
import { RegisterComponent } from './register/register.component';
import { ProfileComponent } from './profile/profile.component';
import { ChnagePasswordComponent } from './chnage-password/chnage-password.component';
import { JwtinterceptorService } from './jwtinterceptor.service';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    EmployeeComponent,
    LoginComponent,
    RegisterComponent,
    ProfileComponent,
    ChnagePasswordComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
    JwtModule.forRoot({
      config: {
          tokenGetter: () => {
              return sessionStorage.getItem('currentUser') ?
                  JSON.parse(sessionStorage.getItem('currentUser') as string).token : null;
          }
      }
  })
  ],
  providers: [{ provide: HTTP_INTERCEPTORS,
    useClass: JwtinterceptorService,
    multi: true
},
provideHttpClient(withInterceptorsFromDi())
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
