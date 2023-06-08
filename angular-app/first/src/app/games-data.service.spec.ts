import { TestBed } from '@angular/core/testing';

import { GamesDataService } from './games-data.service';

describe('GamesDataService', () => {
  let service: GamesDataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GamesDataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
