import { Component, OnInit } from '@angular/core';
import {
  AbstractControl,
  FormBuilder,
  FormGroup,
  Validators,
} from '@angular/forms';
import { Router } from '@angular/router';
import { AdminService } from '../services/admin.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup = new FormGroup({});
  submitted: boolean | undefined;
  isSubmitting: boolean | undefined;

  // forms:any;

  constructor(
    private router: Router,
    private formBuilder: FormBuilder,
    private loginService: AdminService
  ) {}
  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
      email: [
        undefined,
        [
          Validators.required,
          Validators.maxLength(60),
          Validators.minLength(3),
        ],
      ],
      password: [undefined, [Validators.required]],
    });
  }
  get forms(): { [key: string]: AbstractControl } {
    return this.loginForm.controls;
  }
  onLoginForm(login: any) {
    this.submitted = true;
    if (this.loginForm.valid) {
      this.loginService.addUser(login).subscribe(
        (response: any) => {
          console.log('Login Succcessful');
          this.router.navigate(['feature-modules/client-side/home']);
          this.isSubmitting = false;
          this.loginForm.reset();
        },
        (error: any) => {
          this.isSubmitting = false;
          console.log('unable to login');
        }
      );
    } else {
    }
  }
}
