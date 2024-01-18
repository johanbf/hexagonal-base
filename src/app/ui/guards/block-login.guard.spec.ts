import { TestBed } from '@angular/core/testing';
import { CanActivateFn } from '@angular/router';

import { blockLoginGuard } from './block-login.guard';

describe('blockLoginGuard', () => {
  const executeGuard: CanActivateFn = (...guardParameters) => 
      TestBed.runInInjectionContext(() => blockLoginGuard(...guardParameters));

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(executeGuard).toBeTruthy();
  });
});
