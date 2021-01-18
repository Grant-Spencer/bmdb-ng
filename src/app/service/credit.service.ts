  
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Credit } from '../model/credit.class';

const URL = "http://localhost:8080/credits";
@Injectable({
  providedIn: 'root'
})
export class CreditService {
  create(credit: Credit) {
    return this.http.post(URL + '/', credit) as Observable<Credit>;  }

  constructor(private http: HttpClient) { }

  // service functions
  //get all credits
  getAll() : Observable<Credit[]> {
    return this.http.get(URL+'/') as Observable<Credit[]>;
  }

  //get by id
  getById(id) : Observable<Credit> {
    return this.http.get(URL+'/'+id) as Observable<Credit>;
  }
  //delete a credit
  delete(id): Observable<Credit> {
    return this.http.delete(URL + '/'+id) as Observable<Credit>;
  }
}