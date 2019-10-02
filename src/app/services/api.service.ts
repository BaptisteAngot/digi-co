import { Injectable } from '@angular/core';
import { Observable, of, throwError } from 'rxjs';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { catchError, tap, map } from 'rxjs/operators';
import { Article } from '../shared/articles';

const httpOptions = {
  headers: new HttpHeaders({'Content-Type': 'application/json'})
    .set('Access-Control-Allow-Origin', '*')
};
const apiUrl = 'http://localhost:3000/articles';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) { }

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }

  getArticles(): Observable<Article[]> {
    return this.http.get<Article[]>(apiUrl)
      .pipe(
        tap(article => console.log('fetched products')),
        catchError(this.handleError('getProducts', []))
      );
  }

  getArticlesLimit(): Observable<Article[]> {
    return this.http.get<Article[]>('http://localhost:3000/limit')
      .pipe(
        tap(article => console.log('fetched products')),
        catchError(this.handleError('getProducts', []))
      );
  }

  getArticle(_id: number): Observable<Article> {
    const url = `${apiUrl}/${_id}`;
    return this.http.get<Article>(url).pipe(
      tap(_ => console.log(`fetched product id=${_id}`)),
      catchError(this.handleError<Article>(`getProduct id=${_id}`))
    );
  }
}
