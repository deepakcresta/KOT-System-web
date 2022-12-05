import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KotFooterComponent } from './kot-footer.component';

describe('KotFooterComponent', () => {
  let component: KotFooterComponent;
  let fixture: ComponentFixture<KotFooterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ KotFooterComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(KotFooterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
