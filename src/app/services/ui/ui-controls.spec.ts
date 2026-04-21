import { TestBed } from '@angular/core/testing';
import { UiControls } from './ui-controls';

describe('UiControls', () => {
  let service: UiControls;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UiControls);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
