import { Component, OnInit } from '@angular/core';
import {
  AbstractControl,
  FormBuilder,
  FormGroup,
  Validators,
} from '@angular/forms';
import { Router } from '@angular/router';
import { ClientService } from '../services/clientside.service';

@Component({
  selector: 'app-order-form',
  templateUrl: './order-form.component.html',
  styleUrls: ['./order-form.component.scss'],
})
export class OrderFormComponent implements OnInit {
  orderForm: FormGroup = new FormGroup({});
  submitted: boolean | undefined;
  isSubmitting: boolean | undefined;

  // forms:any;

  constructor(
    private router: Router,
    private formBuilder: FormBuilder,
    private orderService: ClientService
  ) {}
  ngOnInit(): void {
    this.orderForm = this.formBuilder.group({
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
    return this.orderForm.controls;
  }
  orderFood(logine: any) {
    // this.submitted = true;
    // console.log(login);
    // if (this.loginForm.valid) {
    //   this.loginService.addUser(login).subscribe(
    //     (response: any) => {
    //       this.isSubmitting = false;
    //     },
    //     (error: any) => {
    //       this.isSubmitting = false;
    //     }
    //   );
    // }
    // else{
    // }
  }
  reloadComponent() {
    let currentUrl = this.router.url;
    this.router.routeReuseStrategy.shouldReuseRoute = () => false;
    this.router.onSameUrlNavigation = 'reload';
    this.router.navigate([currentUrl]);
  }
}
