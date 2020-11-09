import { TestBed } from '@angular/core/testing';

import { DynamicHeaderService } from './dynamic-header.service';

describe('DynamicHeaderService', () => {
  let service: DynamicHeaderService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DynamicHeaderService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
