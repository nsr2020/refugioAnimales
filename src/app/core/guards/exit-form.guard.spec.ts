import { TestBed } from '@angular/core/testing';
import { CanActivateFn } from '@angular/router';

import { exitFormGuard } from './exit-form.guard';

describe('exitFormGuard', () => {
  const executeGuard: CanActivateFn = (...guardParameters) => 
      TestBed.runInInjectionContext(() => exitFormGuard(...guardParameters));

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(executeGuard).toBeTruthy();
  });
});
