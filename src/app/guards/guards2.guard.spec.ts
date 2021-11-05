import { TestBed } from '@angular/core/testing';

import { Guards2Guard } from './guards2.guard';

describe('Guards2Guard', () => {
  let guard: Guards2Guard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(Guards2Guard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
