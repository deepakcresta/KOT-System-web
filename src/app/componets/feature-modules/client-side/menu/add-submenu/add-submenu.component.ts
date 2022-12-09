import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import {
  AbstractControl,
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { MenuService } from '../service/menu.service';

@Component({
  selector: 'app-add-submenu',
  templateUrl: './add-submenu.component.html',
  styleUrls: ['./add-submenu.component.scss'],
})
export class AddSubmenuComponent implements OnInit {
  isSubmitted: boolean | undefined;
  submenuForm: FormGroup = new FormGroup({});
  submitted: boolean | undefined;

  constructor(
    private addSubmenuService: MenuService,
    private router: Router,
    private formBuilder: FormBuilder
  ) {}

  ngOnInit(): void {
    this.submenuForm = this.formBuilder.group({
      submenuName: [
        '',
        [
          Validators.required,
          Validators.maxLength(20),
          Validators.minLength(3),
          Validators.pattern('^[a-z]$'),
        ],
      ],
      price: [
        '',
        [Validators.required, Validators.maxLength(5), Validators.minLength(3)],
      ],
    });
  }

  get forms(): { [key: string]: AbstractControl } {
    return this.submenuForm.controls;
  }
  onAddSubmenu(submenu: any) {
    this.isSubmitted = true;
    console.log(submenu);
    // if (this.submenuForm.valid) {
    this.addSubmenuService.addSubmenu(submenu).subscribe(
      (response: any) => {
        console.log(response);
        this.isSubmitted = false;
        console.log('Submenu Added Successfully');
      },
      (error: any) => {
        this.isSubmitted = false;
        console.log('Error on adding the submenu');
      }
    );
  }
  // }
}
