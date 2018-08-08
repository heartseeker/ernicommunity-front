import { UserRegistrationModel } from './../models/user-registration.model';
import { Injectable } from '@angular/core';
import { ApiService } from './api.service';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(
    private http: ApiService
  ) { }

  /**
   * create/ register users
   * @param payload
   */
  create(payload): Observable<UserRegistrationModel> {
    return this.http.post<UserRegistrationModel>('users', payload);
  }
}
