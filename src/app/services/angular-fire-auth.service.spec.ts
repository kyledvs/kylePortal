import { TestBed } from '@angular/core/testing';

import { AngularFireAuthService } from './angular-fire-auth.service';

describe('AngularFireAuthService', () => {
  let service: AngularFireAuthService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AngularFireAuthService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
