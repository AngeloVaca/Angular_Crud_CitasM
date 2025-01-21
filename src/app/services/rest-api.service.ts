import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, retry, throwError } from 'rxjs';
import { Cita } from '../model/cita';

@Injectable({
  providedIn: 'root'
})
export class RestApiService {

  // Definir API
  apiURL = 'http://localhost:3000';

  constructor(private http: HttpClient) { }
  //Http options:
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }
  // Manejo de errores 
  handleError(error: any) {
    let errorMessage = '';
    if (error.error instanceof ErrorEvent) {
      // Get client-side error
      errorMessage = error.error.message;
    } else {
      // Get server-side error
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    window.alert(errorMessage);
    return throwError(() => {
      return errorMessage;
    });
  }
  //Metodos CRUD para consumir el API RESTful
  getCitas(): Observable<Cita> {
    return this.http.get<Cita>(this.apiURL + '/citas')
      .pipe(
        retry(1),
        catchError(this.handleError)
      )
  }

  // HttpClient API delete() method => delete empleado
  deleteCita(id: any) {
    return this.http.delete<Cita>(this.apiURL + '/citas/' + id, this.httpOptions)
      .pipe(
        retry(1),
        catchError(this.handleError)
      )
  }

  // HttpClient API post() method => Crear empleado
  createCita(cita: any): Observable<Cita> {
    return this.http.post<Cita>(this.apiURL + '/citas', JSON.stringify(cita), this.httpOptions)
      .pipe(
        retry(1),
        catchError(this.handleError)
      )
  }
}

