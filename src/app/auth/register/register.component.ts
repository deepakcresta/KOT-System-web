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
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
})
export class RegisterComponent implements OnInit {
  registerForm: FormGroup = new FormGroup({});
  submitted: boolean | undefined;
  isSubmitting: boolean | undefined;

  // forms:any;

  constructor(
    private router: Router,
    private formBuilder: FormBuilder,
    private loginService: AdminService
  ) {}
  ngOnInit(): void {
    this.registerForm = this.formBuilder.group({
      userName: [
        undefined,
        [
          Validators.required,
          Validators.maxLength(60),
          Validators.minLength(3),
          Validators.pattern('^[a-z A-Z]{3,60}$'),
        ],
      ],
      firstName: [
        undefined,
        [
          Validators.required,
          Validators.maxLength(60),
          Validators.minLength(3),
          Validators.pattern('^[a-z A-Z]{3,60}$'),
        ],
      ],
      lastName: [
        undefined,
        [
          Validators.required,
          Validators.maxLength(60),
          Validators.minLength(3),
          Validators.pattern('^[a-z A-Z]{3,60}$'),
        ],
      ],
      address: [
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
          Validators.maxLength(20),
        ],
      ],
      email: [
        undefined,
        [
          Validators.required,
          Validators.maxLength(60),
          Validators.minLength(3),
          Validators.pattern('^[a-z A-Z]{3,60}$'),
        ],
      ],
    });
  }
  get forms(): { [key: string]: AbstractControl } {
    return this.registerForm.controls;
  }
  onLoginForm(login: any) {
    this.submitted = true;
    console.log(login);
    if (this.registerForm.valid) {
      this.loginService.registerUser(login).subscribe(
        (response: any) => {
          this.isSubmitting = false;
          // this.toasterService.success('Email Send Successfully.');
          // this.contactService.sendEmail(contact).subscribe();
        },
        (error: any) => {
          this.isSubmitting = false;
          // this.toasterService.error('Error on sending Email.');
        }
      );
    } else {
      // this.toasterService.error('Please enter your information.');
    }
  }
  reloadComponent() {
    let currentUrl = this.router.url;
    this.router.routeReuseStrategy.shouldReuseRoute = () => false;
    this.router.onSameUrlNavigation = 'reload';
    this.router.navigate([currentUrl]);
  }
}
