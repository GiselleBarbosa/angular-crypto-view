import { TestBed } from '@angular/core/testing';

import { CheckScreenSizeService } from './check-screen-size.service';

describe('CheckScreenSizeService', () => {
  let service: CheckScreenSizeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CheckScreenSizeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
