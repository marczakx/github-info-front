import { TestBed } from '@angular/core/testing';

import { GitClientService } from './git-client.service';

describe('GitClientService', () => {
  let service: GitClientService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GitClientService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
