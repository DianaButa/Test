import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, pipe, throwError } from 'rxjs';
import { environment } from '../environments/environment';
import { ProductListDTO } from './domain/table/models/productlist.model';


@Injectable({ providedIn: 'root' })
export class HttpService {

  private url = 'https://localhost:7286/api';

  constructor(private http: HttpClient) {}

   public get<T>(endpoint: string): Observable<T> {
    const headers = this._setHeaders();
    return this.http 
      .get<T>(`${this.url}/${endpoint}`, { headers })
      .pipe(
        catchError(error => throwError(() => error.error))
      );
  }

  public getById<T>(endpoint: string, id: string | number): Observable<T> {
    const headers = this._setHeaders();
    return this.http.get<T>(`${this.url}/${endpoint}/${id}`,{ headers })
    .pipe(
      catchError(error => throwError(() => error.error))
    );
  }

  public post<T>(url: string, data: any): Observable<T> {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json'
    });

    return this.http.post<T>(`${this.url}/${url}`, data, { headers }).pipe(
      catchError(error => {
        console.error('Error:', error);
        return throwError(error);
      })
    );
  }

  public delete<T>(endpoint: string, id: string): Observable<T> {
		const headers = this._setHeaders();
		return this.http
			.delete<T>(`${this.url}/${endpoint}/${id}`, {
				withCredentials: false,
				headers,
			})
			.pipe(catchError(error => throwError(() => error.error)));
	}

  
  public put<T>(endpoint: string, data: any): Observable<T> {
    const headers = this._setHeaders();
    const options = {
        headers,
        withCredentials: false, 
    };

    return this.http.put<T>(`${this.url}/${endpoint}`, data, options).pipe(
        catchError(error => throwError(() => error.error))
    );
}


  private _setHeaders() {
		const headers = new HttpHeaders({
			Accept: "application/json",
			"Content-Type": "application/json",
		});
		return headers;
	}
  
}
