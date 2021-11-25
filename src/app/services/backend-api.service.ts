import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpEventType, HttpRequest, HttpErrorResponse, HttpEvent } from '@angular/common/http';
import { environment1 } from '../../environments/environment.prod';
import { Observable, throwError } from 'rxjs';
import { retry, catchError } from 'rxjs/operators';
import { Subject } from 'rxjs';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class BackendApiService {

  constructor(private httpClient: HttpClient, private router: Router) { }
  httpOptions = {
    headers: new HttpHeaders({
      // 'Content-Type': 'application/json'
    })
  }
  private handleError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      // A client-side or network error occurred. Handle it accordingly.
      console.error('An error occurred:', error);
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong.

      console.error(
        `Backend returned code ${error.status}, ` +
        `body was: ${error.error}`);
    }
    // Return an observable with a user-facing error message.
    return throwError(
      'Something bad happened; please try again later.');
  }

  login(data: any): Observable<any> {
    return this.httpClient.post<any>(environment1.endPoint + "api/auth/signin", data)
      .pipe()
  }

  searchSong(pattern: any): Observable<any> {
    return this.httpClient.get<any>(environment1.songEndPoint + "songs.json?pattern=" + pattern)
      .pipe()
  }


}
