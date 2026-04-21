import { Component, inject, OnDestroy, signal } from '@angular/core';
import { disabled, email, form, FormField, max, min, pattern, required, validate } from '@angular/forms/signals';
import { ValidationFormData } from '../../services/password-validation/validation-form.types';
import { delay, Subject, takeUntil } from 'rxjs';
import { PasswordValidation } from '../../services/password-validation/password-validation';
import { LOG } from '../../services/ui/ui-controls';
import { Validation } from '../../shared/validation/validation';

@Component({
  selector: 'app-validation-form',
  templateUrl: './validation-form.html',
  styleUrl: './validation-form.scss',
  imports: [FormField],
})
export class ValidationForm implements OnDestroy {

  private subs = new Subject<void>();

  private passwordValidation = inject(PasswordValidation);
  private validation = inject(Validation);

  // Model, utilizando a interface e iniciando os valores.
  validationFormModel = signal<ValidationFormData>({
    name: '',
    email: '',
    password: '',
  });
  isResultSucess = signal<boolean | null>(null);
  isSubmitting = signal<boolean>(false);

  // Formulário utilizando Signals.
  validationForm = form(this.validationFormModel, (schemaPath) => {
    // Obrigatórios:
    required(schemaPath.name, { message: 'O nome é obrigatório' });
    required(schemaPath.email, { message: 'O email é obrigatório' });
    // Formatos:
    email(schemaPath.email, { message: 'Email com formato inválido' });
    pattern(schemaPath.password, /^[0-9]{6}$/, { message: 'A senha deve conter 6 dígitos' });

    // Intervalos:
    min(schemaPath.password, 184760, { message: 'A senha deve estar entre os números 184759 e 856920' });
    max(schemaPath.password, 856919, { message: 'A senha deve estar entre os números 184759 e 856920' });

    // Customizados - Senha:
    // Validação de sequência repetida (ex: 112345 ou 123455).
    validate(schemaPath.password, ({ value }) => {
      return this.validation.repeatedSequence('Senha', value());
    });

    // Sequência crescente.
    validate(schemaPath.password, ({ value }) => {
      return this.validation.increasingSequence('Senha', value());
    });

    // Desabilitados
    disabled(schemaPath.name, () => this.isSubmitting());
    disabled(schemaPath.email, () => this.isSubmitting());
    disabled(schemaPath.password, () => this.isSubmitting());

  });

  // Exemplo de Ciclo de vida
  ngOnDestroy(): void {
    this.subs.next();
    this.subs.complete();
  }

  async onSubmit(event: Event) {
    event.preventDefault();
    this.isResultSucess.set(null);
    this.isSubmitting.set(true);
    if (this.validationForm().valid()) {
      LOG(2, '✅ %cVÁLIDO!%c Enviará:', 'color: green; font-weight: bold;', '', this.validationFormModel());
      this.passwordValidation.passwordValidation(this.validationFormModel())
        .pipe(
          // delay(2000), // Simula um atraso de 2 segundos para demonstrar o loader.
          takeUntil(this.subs)
        )
        .subscribe({
          next: (response) => {
            this.isResultSucess.set(response.isSuccess ?? false);
            if (response.isSuccess) {
              LOG(1, '✅ Resposta da API:', response);
              // response.data.requestId
            } else {
              LOG(1, `❌ Erro ${response.error?.statusCode ?? '?'}:`, response.error);
            }
          },
          error: (error) => {
            this.isResultSucess.set(false);
            LOG(1, '❌ Erro na requisição:', error);
          },
        })
        .add(() => {
          this.isSubmitting.set(false);
        });
    } else {
      LOG(2, '❌ %cINVÁLIDO, por favor corrija os erros.', 'color: red; font-weight: bold;');
      this.isSubmitting.set(false);
    }
  }
}
