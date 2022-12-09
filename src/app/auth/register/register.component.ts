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
  contactForm: FormGroup = new FormGroup({});
  submitted: boolean = false;

  isSubmitting: boolean | undefined;

  constructor(
    private router: Router,
    private formBuilder: FormBuilder,
    private contactService: AdminService
  ) {}
  ngOnInit(): void {
    this.contactForm = this.formBuilder.group({
      customerName: [
        undefined,
        [
          Validators.required,
          Validators.maxLength(60),
          Validators.minLength(3),
          Validators.pattern('^[a-z A-Z]{3,60}$'),
        ],
      ],
      phoneNumber: [
        undefined,
        [
          Validators.required,
          Validators.minLength(10),
          Validators.maxLength(10),
          Validators.pattern('^[0-9]*$'),
        ],
      ],
      email: [
        undefined,
        [
          Validators.required,
          Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{3,4}$'),
          Validators.maxLength(80),
          Validators.minLength(8),
        ],
        
        
      ],
      password: [
        undefined,
        [
          Validators.required,
          Validators.maxLength(80),
          Validators.minLength(8),
        ],
        
        
      ],
      address: [undefined, Validators.required],
    });
  }
  get forms(): { [key: string]: AbstractControl } {
    return this.contactForm.controls;
  }
  onSendForm(contact: any) {
    this.submitted = true;
    console.log(contact);
    if (this.contactForm.valid) {
      this.contactService.registerUser(contact).subscribe(
        (response: any) => {
          this.isSubmitting = false;
          console.log("Contact added successfully");
          this.router.navigate(['feature-modules/client-side/home'])
        
        },
        (error: any) => {
          this.isSubmitting = false;
         console.log("Error on sending the contact ")
        }
      );
    } 
  }
  reloadComponent() {
    let currentUrl = this.router.url;
    this.router.routeReuseStrategy.shouldReuseRoute = () => false;
    this.router.onSameUrlNavigation = 'reload';
    this.router.navigate([currentUrl]);
  }
}