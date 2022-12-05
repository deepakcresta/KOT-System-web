import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditSubmenuComponent } from './edit-submenu.component';

describe('EditSubmenuComponent', () => {
  let component: EditSubmenuComponent;
  let fixture: ComponentFixture<EditSubmenuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditSubmenuComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditSubmenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
