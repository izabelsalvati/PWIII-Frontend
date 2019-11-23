import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { throwError } from 'rxjs/internal/observable/throwError';
import { Plano } from '../plano';
import { Observable } from 'rxjs/internal/Observable';
import { retry, catchError} from 'rxjs/Operators';

@Injectable({
  providedIn: 'root'
})
export class PlanoAPIService {
  apiURL : string = "http://localhost:8080/api/planos";

  constructor(private httpPlano: HttpClient) { }

  handleError(error) {
    let errorMessage = '';
    if(error.error instanceof ErrorEvent) {
    // Get client-side error

    
    errorMessage = error.error.message;
    } else {
      errorMessage = `Código de erro: ${error.status}\nMensagem: ${error.message}`;
    }
      window.alert(errorMessage);
    return throwError(errorMessage);
    
    }
    getPlanos(): Observable<Plano[]> {
      return this.httpPlano.get<Plano[]>(this.apiURL)
                           .pipe(retry(1),
                                catchError(this.handleError));
      }
    createPlano(plan: Plano): Observable<Plano> {
      return this.httpPlano.post<Plano>(`${this.apiURL}`, plan)
                          .pipe(retry(1),
                               catchError(this.handleError));
        }

}
