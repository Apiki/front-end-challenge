import { TestBed } from '@angular/core/testing';

import { InitialService } from './initial.service';

describe('InitialService', () => {
  let service: InitialService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(InitialService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
