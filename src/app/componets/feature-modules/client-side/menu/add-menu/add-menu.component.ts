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
  menuForm: FormGroup = new FormGroup({});
  submitted: boolean | undefined;

  constructor(
    private addmenuService: ClientService,
    private router: Router,
    private formBuilder: FormBuilder
  ) {}

  ngOnInit(): void {
    this.menuForm = this.formBuilder.group({
      menu: [
        '',
        [
          Validators.required,
          Validators.maxLength(10),
          Validators.minLength(3),
          Validators.pattern('^[a-z]$'),
        ],
      ],
    });
  }

  get forms(): { [key: string]: AbstractControl } {
    return this.menuForm.controls;
  }

  onAddMenu(menu: any) {
    this.submitted = true;
    console.log(menu);
    if (this.menuForm.valid) {
      this.addmenuService.addMenu(menu).subscribe(
        (response: any) => {
          this.isSubmitting = false;
          console.log("menu added successfully.")
        },
        (error: any) => {
          this.isSubmitting = false;
          console.log("Error on adding the menu")
        }
      );
    } else {
    }
  }
}
