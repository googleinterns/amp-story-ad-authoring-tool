import { TestBed } from '@angular/core/testing';

import { AdAuthoringService } from './ad-authoring.service';

describe('AdAuthoringService', () => {
  let service: AdAuthoringService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AdAuthoringService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
