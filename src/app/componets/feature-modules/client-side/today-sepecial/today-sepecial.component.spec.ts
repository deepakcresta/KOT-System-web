import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TodaySepecialComponent } from './today-sepecial.component';

describe('TodaySepecialComponent', () => {
  let component: TodaySepecialComponent;
  let fixture: ComponentFixture<TodaySepecialComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TodaySepecialComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TodaySepecialComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
