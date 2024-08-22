import { TestBed } from '@angular/core/testing';

import { MyshareserviceService } from './myshareservice.service';

describe('MyshareserviceService', () => {
  let service: MyshareserviceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MyshareserviceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
