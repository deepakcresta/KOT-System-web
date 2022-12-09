import { Component, OnInit } from '@angular/core';
import {
  AbstractControl,
  FormBuilder,
  FormGroup,
  Validators,
} from '@angular/forms';
import { Router } from '@angular/router';
import { TodaySpeicalService } from '../service/today-speical.service';

@Component({
  selector: 'app-add-today-special',
  templateUrl: './add-today-special.component.html',
  styleUrls: ['./add-today-special.component.scss'],
})
export class AddTodaySpecialComponent implements OnInit {
  todaySpecialForm: FormGroup = new FormGroup({});
  submitted: boolean | undefined;
  isSubmitting: boolean | undefined;

  constructor(
    private router: Router,
    private formBuilder: FormBuilder,
    private todaySpecialService: TodaySpeicalService
  ) {}
  ngOnInit(): void {
    this.todaySpecialForm = this.formBuilder.group({
      todaySpecialDish: [
        undefined,
        [
          Validators.required,
          Validators.maxLength(60),
          Validators.minLength(3),
          Validators.pattern('^[a-z A-Z]{3,60}$'),
        ],
      ],
      desription: [
        undefined,
        [
          Validators.required,
          Validators.minLength(10),
          Validators.maxLength(100),
        ],
      ],
      price: [
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
    return this.todaySpecialForm.controls;
  }
  addTodaySpecial(todaySpecaial: any) {
    this.submitted = true;
    console.log(todaySpecaial);
    if (this.todaySpecialForm.valid) {
      this.todaySpecialService.addTodaySpecial(todaySpecaial).subscribe(
        (response: any) => {
          this.isSubmitting = false;
          console.log('Today Special order succesfully', response);
          this.todaySpecialForm.reset;
        },
        (error: any) => {
          this.isSubmitting = false;
          console.log('Error on ordering the today successful', error);
        }
      );
    } else {
    }
  }
}
