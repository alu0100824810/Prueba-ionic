import { TestBed } from '@angular/core/testing';

import { WelcomeInfoGuard } from './welcome-info.guard';

describe('WelcomeInfoGuard', () => {
  let guard: WelcomeInfoGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(WelcomeInfoGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
