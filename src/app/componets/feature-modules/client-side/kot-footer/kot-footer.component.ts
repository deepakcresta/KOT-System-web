import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-kot-footer',
  templateUrl: './kot-footer.component.html',
  styleUrls: ['./kot-footer.component.scss']
})
export class KotFooterComponent implements OnInit {
  contactForm:FormGroup=new FormGroup({});
  submitted:undefined;

  constructor() { }

  ngOnInit(): void {
  }
forms:any;
}
