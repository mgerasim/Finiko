import { TestBed } from '@angular/core/testing';

import { FinikoService } from './finiko.service';

describe('FinikoService', () => {
  let service: FinikoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FinikoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
