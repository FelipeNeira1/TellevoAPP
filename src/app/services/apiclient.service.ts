import { Injectable } from '@angular/core';

import { HttpClient, HttpHeaders, HttpErrorResponse} from '@angular/common/http';
import { retry, catchError} from 'rxjs/operators';
import { Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class APIClientService {
  httpOptions = {
    headers: new HttpHeaders({
    ' Content-Type ': 'application/json',
    ' Access-Control-Allow-Origin ' :'*'
    })
  };

  // Se establece la base url del API a consumir
    apiURL = 'https://jsonplaceholder.typicode.com';

    // Se declara la variable http de tipo HttpClient
    constructor(private http: HttpClient) { }

    getUsuarios(): Observable<any>{
      return this.http.get(this.apiURL+'/user/').pipe(
        retry(3)
      );
    }
    getUsuario(userId): Observable<any>{
      return this.http.get(this.apiURL+'/user/'+userId).pipe(
        retry(3)
      );
    }
    getPosts(userId): Observable<any>{
      return this.http.get(this.apiURL+'/post/').pipe(
        retry(3)
      );
    }
    getPost(userId): Observable<any>{
      return this.http.get(this.apiURL+'/post/', id, this.httpOptions).pipe(
        retry(3)
      );
    }
    createPost(userId): Observable<any>{
      return this.http.get(this.apiURL+'/post/'+ post, this.httpOptions).pipe(
        retry(3)
      );
    }
    updatePost(userId): Observable<any>{
      return this.http.get(this.apiURL+'/post/'+ id,post, this.httpOptions).pipe(
        retry(3)
      );
    }
    deletePost(userId): Observable<any>{
      return this.http.get(this.apiURL+'/post/'+ id, this.httpOptions).pipe(
        retry(3)
      );
    }
}
