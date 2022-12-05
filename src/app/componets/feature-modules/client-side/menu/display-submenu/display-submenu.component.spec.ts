import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DisplaySubmenuComponent } from './display-submenu.component';

describe('DisplaySubmenuComponent', () => {
  let component: DisplaySubmenuComponent;
  let fixture: ComponentFixture<DisplaySubmenuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DisplaySubmenuComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DisplaySubmenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
