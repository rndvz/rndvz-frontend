import { TestBed, inject } from '@angular/core/testing';

import { RestFullService } from './rest-full.service';

describe('RestFullService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [RestFullService]
    });
  });

  it('should be created', inject([RestFullService], (service: RestFullService) => {
    expect(service).toBeTruthy();
  }));
});
