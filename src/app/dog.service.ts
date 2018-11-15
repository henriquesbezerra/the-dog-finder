import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable, of } from 'rxjs';
import { catchError, map, tap} from 'rxjs/operators';

import { DogList } from './dog/dog';
import { Dog } from './dog-detail/dog-detail';

const httpOptions = {
  headers: new HttpHeaders({'Content-Type':'application/json'})
};

@Injectable({ providedIn: 'root' })

export class DogService {
  
  private dogsUrl = 'http://henrisilva.com.br/the-dog-finder/dogs';

  /**
   * Handle Http operation that failed.
   * Let the app continue.
   * @param operation - nome da operação que falhou
   * @param result - valor opcional retornado como um observable
   */
  private handleError<T>(operation = 'operation', result?: T){
    return (error: any): Observable<T> => {

      //TODO: send the errro to remote loggin infrasctructure
      console.log(error);

      //TODO: better job of transforming error for user consumption
      console.log(operation , " failed: ", error.message);

      //Let the app keep running by returning an empty result.
      return of(result as T);
    }
  } 

  constructor(private http: HttpClient) { }

  getDogList(): Observable<DogList[]>{
    return this.http.get<DogList[]>(this.dogsUrl).pipe(
      catchError(this.handleError('getDogList',[]))
    );
  }  
  getDog(id: number): Observable<Dog>{
    const url = this.dogsUrl+'/'+id;
    return this.http.get<Dog>(url).pipe(
      tap(_ => console.log('Buscado Dog id= ', id)),
      catchError(this.handleError<Dog>())
    );    
  }
 
}
