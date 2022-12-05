import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddSubmenuComponent } from './add-submenu.component';

describe('AddSubmenuComponent', () => {
  let component: AddSubmenuComponent;
  let fixture: ComponentFixture<AddSubmenuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddSubmenuComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddSubmenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
