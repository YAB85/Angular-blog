import { User } from './../../../shared/interfaces/interfaces';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) { }

  get token(): string{
    return ''
  }

  login(user: User): Observable<any> {
    return this.http.post("", user)
  }

  logout(){

  }

  isAuthenticated(): boolean{
    return !!this.token
  }

  private setToken() {

  }
}
