import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ValidationForm } from './validation-form';
import { Validation } from '../../shared/validation/validation';

describe('ValidationForm', () => {
  let component: ValidationForm;
  let fixture: ComponentFixture<ValidationForm>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ValidationForm],
      providers: [Validation],
    })
      .compileComponents();

    fixture = TestBed.createComponent(ValidationForm);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
