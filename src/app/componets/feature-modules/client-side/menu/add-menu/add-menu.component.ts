import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { Location } from '@angular/common';
import {
  AbstractControl,
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { MenuService } from '../service/menu.service';
@Component({
  selector: 'app-add-menu',
  templateUrl: './add-menu.component.html',
  styleUrls: ['./add-menu.component.scss'],
})
export class AddMenuComponent implements OnInit {
  isSubmitting: boolean | undefined;
  menuForm: FormGroup = new FormGroup({});
  submitted: boolean | undefined;

  constructor(
    private addmenuService: MenuService,
    private router: Router,
    private formBuilder: FormBuilder,
    private location: Location
  ) {}

  ngOnInit(): void {
    this.menuForm = this.formBuilder.group({
      foodMenu: [
        '',
        [
          Validators.required,
          Validators.maxLength(10),
          Validators.minLength(3),
        ],
      ],
    });
  }

  get forms(): { [key: string]: AbstractControl } {
    return this.menuForm.controls;
  }

  onAddMenu(menu: any) {
    this.submitted = true;
    if (this.menuForm.valid) {
      this.addmenuService.addMenu(menu).subscribe(
        (response: any) => {
          this.isSubmitting = false;
          this.menuForm.reset();
          console.log('menu added successfully.');
        },
        (error: any) => {
          this.isSubmitting = false;
          console.log('Error on adding the menu');
        }
      );
    }
  }
}
