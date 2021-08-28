import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss'],
})
export class ProfileComponent implements OnInit {
  profileForm: FormGroup;

  constructor(private authService: AuthService) {
    this.profileForm = new FormGroup({
      displayName: new FormControl('', Validators.required),
      email: new FormControl('', Validators.required),
      age: new FormControl('', Validators.required),
    });
  }

  ngOnInit(): void {
    this.authService.getProfileData().valueChanges((user: any) =>  this.profileForm.patchValue({ displayName: user?.displayName, email: user?.email, age: user?.age}));
  }

  saveProfile(): void {
    const {displayName, email, age} = this.profileForm.value;
    this.authService.updateUserData(displayName, email, age);
  }
}
