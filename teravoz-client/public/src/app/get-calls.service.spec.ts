import { TestBed } from '@angular/core/testing';

import { GetCallsService } from './get-calls.service';

describe('GetCallsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: GetCallsService = TestBed.get(GetCallsService);
    expect(service).toBeTruthy();
  });
});
