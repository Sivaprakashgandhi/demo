import { TestBed } from '@angular/core/testing';

import { SEmployeeService } from './s-employee.service';

describe('SEmployeeService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: SEmployeeService = TestBed.get(SEmployeeService);
    expect(service).toBeTruthy();
  });
});
