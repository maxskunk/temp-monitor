import { TestBed } from '@angular/core/testing';

import { TempLogService } from './temp-log.service';

describe('TempLogService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: TempLogService = TestBed.get(TempLogService);
    expect(service).toBeTruthy();
  });
});
