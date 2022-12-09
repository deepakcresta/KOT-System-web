import { Component, OnInit, ViewChild } from '@angular/core';
import {
  AbstractControl,
  FormBuilder,
  FormGroup,
  Validators,
} from '@angular/forms';
import { ClientService } from '../../services/clientside.service';
import { Router } from '@angular/router';
import { MenuService } from '../service/menu.service';
@Component({
  selector: 'app-edit-menu',
  templateUrl: './edit-menu.component.html',
  styleUrls: ['./edit-menu.component.scss'],
})
export class EditMenuComponent implements OnInit {
  isSubmitting: boolean | undefined;
  editForm: FormGroup = new FormGroup({});
  submitted: boolean | undefined;

  constructor(
    private editmenuService: MenuService,
    private router: Router,
    private formBuilder: FormBuilder
  ) {}

  ngOnInit(): void {
    this.editForm = this.formBuilder.group({
      name: [
        '',
        [
          Validators.required,
          Validators.maxLength(10),
          Validators.minLength(3),
          Validators.pattern('^[a-z]$'),
        ],
      ],
      price: ['', Validators.required],
      status: ['', Validators.required],
      image: [''],
    });
  }

  get forms(): { [key: string]: AbstractControl } {
    return this.editForm.controls;
  }

  onEditMenu(menu: any) {
    //for posting the items
    this.submitted = true;
    console.log(menu);
    this.editmenuService.editMenu(menu).subscribe(
      (response: any) => {
        this.router.navigate(['sub-menu-1']);
        console.log(response);
      },
      (error: any) => {
        console.error(error);
      }
    );
  }
}
