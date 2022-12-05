import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import {
  AbstractControl,
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { ClientService } from '../../services/clientside.service';
@Component({
  selector: 'app-add-menu',
  templateUrl: './add-menu.component.html',
  styleUrls: ['./add-menu.component.scss'],
})
export class AddMenuComponent implements OnInit {
  isSubmitting: boolean | undefined;
  myForm: FormGroup = new FormGroup({});
  submitted: boolean | undefined;

  constructor(
    private addmenuService: ClientService,
    private router: Router,
    private formBuilder: FormBuilder
  ) {}

  ngOnInit(): void {
    this.myForm = this.formBuilder.group({
      name: [
        '',
        [
          Validators.required,
          Validators.maxLength(10),
          Validators.minLength(3),
          Validators.pattern('^[a-z]$'),
        ],
      ],
      price: [
        '',
        Validators.required,
        Validators.maxLength(10),
        Validators.minLength(3),
      ],
    });
  }

  get forms(): { [key: string]: AbstractControl } {
    return this.myForm.controls;
  }

  onAddMenu(item: any) {
    this.submitted = true;
    console.log(item);
    if (this.myForm.valid) {
      this.addmenuService.addMenu(item).subscribe(
        (response: any) => {
          this.isSubmitting = false;
        },
        (error: any) => {
          this.isSubmitting = false;
        }
      );
    } else {
    }
  }
}
