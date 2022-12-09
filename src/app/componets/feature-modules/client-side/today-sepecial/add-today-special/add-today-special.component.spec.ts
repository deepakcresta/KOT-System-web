import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddTodaySpecialComponent } from './add-today-special.component';

describe('AddTodaySpecialComponent', () => {
  let component: AddTodaySpecialComponent;
  let fixture: ComponentFixture<AddTodaySpecialComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddTodaySpecialComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddTodaySpecialComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
