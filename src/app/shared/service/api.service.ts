import { environment } from './../../../environments/environment';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(
    private http: HttpClient
  ) { }

  get<T>(endpoint: string): Observable<any> {
    return this.http.get(`${environment.api_endpoint}/${endpoint}`);
  }

  post<T>(endpoint: string, payload): Observable<any> {
    return this.http.post(`${environment.api_endpoint}/${endpoint}`, payload);
  }

  put<T>(endpoint: string, payload): Observable<any> {
    return this.http.put(`${environment.api_endpoint}/${endpoint}`, payload);
  }

  delete<T>(endpoint: string): Observable<any> {
    return this.http.delete(`${environment.api_endpoint}/${endpoint}`);
  }

}
