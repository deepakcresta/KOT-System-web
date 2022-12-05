import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FeatureModulesComponent } from './feature-modules.component';

describe('FeatureModulesComponent', () => {
  let component: FeatureModulesComponent;
  let fixture: ComponentFixture<FeatureModulesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FeatureModulesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FeatureModulesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
