import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss']
})
export class AuthComponent implements OnInit {
  loginForm: FormGroup;

  constructor(private authService: AuthService) {
    this.loginForm = new FormGroup(
      {
        email: new FormControl('test@email.com', Validators.required),
        password: new FormControl('test12', Validators.required),
      }
    );
  }

  ngOnInit(): void {
  }

  login(): void {
    const { email, password } = this.loginForm.value;
    this.authService.signIn(email, password);
  }
}
