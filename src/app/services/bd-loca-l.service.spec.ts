import { TestBed } from '@angular/core/testing';

import { BdLocaLService } from './bd-loca-l.service';

describe('BdLocaLService', () => {
  let service: BdLocaLService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BdLocaLService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
