// src/app/register/register.component.ts

import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { RegisterService } from '../register.service';
import { Router } from '@angular/router';
import { Register } from '../register';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  newUser : Register= new Register();
  countries: any[] = [];
  states: any[] = [];
  cities: any[] = [];

  constructor(private router: Router, private registerService: RegisterService, private httpClient: HttpClient) { }

  ngOnInit(): void {
    this.loadCountries();
  }

  loadCountries() {
    this.httpClient.get<any[]>('https://localhost:7180/api/Account/countries').subscribe(data => {
      this.countries = data;
    });
  }

  onCountryChange() {
    if (this.newUser.CountryId) {
      this.httpClient.get<any[]>("https://localhost:7180/api/Account/states/"+this.newUser.CountryId).subscribe(data => {
        this.states = data;
        this.cities = []; // Clear cities when country changes
      });
    }
  }

  onStateChange() {
    if (this.newUser.StateId) {
      this.httpClient.get<any[]>("https://localhost:7180/api/Account/cities/"+this.newUser.StateId).subscribe(data => {
        this.cities = data;
      });
    }
  }

  saveClick() {
    if (!this.newUser.Email || !this.newUser.Password) {
      console.error('Missing required fields');
      return;
    }
    if (this.newUser.Password !== this.newUser.ConfirmPassword) {
      alert('Passwords do not match');
      return;
    }
    this.registerService.register(this.newUser).subscribe(
      response => {
        console.log(this.newUser);
        alert('User registered successfully');
        this.router.navigateByUrl('/login');
      },
      error => {
        console.log(this.newUser);
        console.log(error);
        alert(`Registration failed: ${error.error}`);
      }
    );
  }
}
