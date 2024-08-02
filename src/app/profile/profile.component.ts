import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ProfileService } from '../profile.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.scss'
})
export class ProfileComponent {
  // profileForm!: FormGroup;
  // submitted = false;

  // constructor(
  //   private formBuilder: FormBuilder,
  //   private profileService: ProfileService,
  //   private router: Router
  // ) { }

  // ngOnInit(): void {
  //   this.profileForm = this.formBuilder.group({
  //     userName: ['', Validators.required],
  //     email: ['', [Validators.required, Validators.email]],
  //     gender: ['', Validators.required],
  //     country: ['', Validators.required],
  //     state: ['', Validators.required],
  //     city: ['', Validators.required],
  //     subscribe: [false]
  //   });

  //   // Load current user data and set form values
  //   this.profileService.getProfile().subscribe(data => {
  //     this.profileForm.patchValue(data);
  //   });
  // }

  // get f() { return this.profileForm.controls; }

  // onSubmit(): void {
  //   this.submitted = true;

  //   if (this.profileForm.invalid) {
  //     return;
  //   }

  //   this.profileService.updateProfile(this.profileForm.value).subscribe(
  //     response => {
  //       alert('Profile updated successfully');
  //     },
  //     error => {
  //       alert('Profile update failed');
  //     }
  //   );
  // }
}
