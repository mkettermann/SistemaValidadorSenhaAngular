import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { catchError, map, Observable, of } from 'rxjs';
import { ApiErrorResponse, ApiResponse, ApiSuccessResponse } from './api-service.types';
import { ENV } from '../../../env/env';

@Injectable({ providedIn: 'root' })
export class ApiService {

  // A função deste serviço é centralizar as chamadas API. 
  // Arquitetura Vertical ou Horizontal: Se crescer e utilizar multiplas APIs, será necessário converter pra abstrato e os serviços que extenderem dele implementam o que for necessário. E se houver multiplos ambientes com multiplas apis, será mais organizado criar um serviço para cada ambiente.
  private urlBase = ENV.urlBase;

  // Neste sistema será utilizado o HttpClient do Angular, porém poderia ser utilizado outros métodos como o fetch...
  private http = inject(HttpClient);

  // Método genérico para realizar o POST.
  // Como a API não está entregando uma camada de sucesso, fiz uma camada no retorno principal, permitindo que, mesmo trocando de API, o tratamento de sucesso e erro seja o mesmo.
  protected post = <T>(url: string, body: any, options?: any): Observable<ApiResponse<T>> => {
    // Caso mude para API autenticada (JWT...) precisa reformular o header aqui.
    return this.http.post<T>(`${this.urlBase}${url}`, body, options).pipe(
      map(data => ({ isSuccess: true, data } as ApiSuccessResponse<T>)),
      catchError((error: HttpErrorResponse) => {
        const errorResponse: ApiErrorResponse = {
          isSuccess: false,
          error: {
            message: error.error?.message ?? 'Erro desconhecido',
            statusCode: error.status,
          }
        };
        return of(errorResponse);
      })
    );
  };

  // ... outros métodos HTTP (GET, PUT, DELETE) podem ser implementados de forma similar ao POST, seguindo a mesma estrutura de tratamento de sucesso e erro.

}
