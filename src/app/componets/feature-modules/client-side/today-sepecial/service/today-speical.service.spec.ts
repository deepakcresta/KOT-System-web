import { TestBed } from '@angular/core/testing';

import { TodaySpeicalService } from './today-speical.service';

describe('TodaySpeicalService', () => {
  let service: TodaySpeicalService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TodaySpeicalService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
