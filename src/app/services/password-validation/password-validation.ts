import { Injectable } from '@angular/core';
import { ApiService } from '../base/api-service';
import { ValidationFormData, ValidationFormResponse } from './validation-form.types';

@Injectable({ providedIn: 'root' })
export class PasswordValidation extends ApiService {

  // Este serviço consome o POST do Api Service.
  passwordValidation = (payload: ValidationFormData) => {
    return this.post<ValidationFormResponse>('/PasswordValidation', payload);
  }

}
