import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ControlHue } from './control-hue';

describe('ControlHue', () => {
  let component: ControlHue;
  let fixture: ComponentFixture<ControlHue>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ControlHue]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ControlHue);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
