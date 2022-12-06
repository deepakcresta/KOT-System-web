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
      userName: [
        undefined,
        [
          Validators.required,
          Validators.maxLength(60),
          Validators.minLength(3),
          Validators.pattern('^[a-z A-Z]{3,60}$'),
        ],
      ],
      password: [
        undefined,
        [
          Validators.required,
          Validators.minLength(4),
          Validators.maxLength(10),
        ],
      ],
    });
  }
  get forms(): { [key: string]: AbstractControl } {
    return this.loginForm.controls;
  }
  onLoginForm(login: any) {
    this.submitted = true;
    console.log(login);
    if (this.loginForm.valid) {
      this.loginService.addUser(login).subscribe(
        (response: any) => {
          this.isSubmitting = false;
          this.loginForm.reset();
        },
        (error: any) => {
          this.isSubmitting = false;
        }
      );
    } else {
    }
  }
  reloadComponent() {
    let currentUrl = this.router.url;
    this.router.routeReuseStrategy.shouldReuseRoute = () => false;
    this.router.onSameUrlNavigation = 'reload';
    this.router.navigate([currentUrl]);
  }
}
