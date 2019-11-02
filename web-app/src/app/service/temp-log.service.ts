import { Injectable } from '@angular/core';
import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { retry, catchError, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class TempLogService {

  // Define API
  apiURL = 'http://192.168.0.113:3099/templog';

  constructor(public http: HttpClient) {
  }

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }

  // HttpClient API get() method => Fetch employee
  getTemps(): Observable<any> {
    let params = new HttpParams();
    // params = params.append('key', key);
    // params = params.append('wakeup', wakeup_value);
    return this.http.get<any>(this.apiURL, { params: params }).pipe(
      tap( // Log the result or error
        data => {
          return data;
        },
        error => {
          return error;
        }
      )
    )
  }

  // Error handling 
  handleError(error) {
    let errorMessage = '';
    if (error.error instanceof ErrorEvent) {
      // Get client-side error
      errorMessage = error.error.message;
    } else {
      // Get server-side error
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    return throwError(errorMessage);
  }
}
