import { TestBed } from '@angular/core/testing';

import { ChangePaswordService } from './change-pasword.service';

describe('ChangePaswordService', () => {
  let service: ChangePaswordService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ChangePaswordService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
