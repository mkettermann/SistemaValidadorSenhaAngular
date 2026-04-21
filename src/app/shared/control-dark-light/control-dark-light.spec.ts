import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ControlDarkLight } from './control-dark-light';

describe('ControlDarkLight', () => {
  let component: ControlDarkLight;
  let fixture: ComponentFixture<ControlDarkLight>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ControlDarkLight]
    })
      .compileComponents();

    fixture = TestBed.createComponent(ControlDarkLight);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  //Teste se renderização do icone: bi
  it('should render any icon', () => {
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('.bi')).toBeTruthy();
  });
});
