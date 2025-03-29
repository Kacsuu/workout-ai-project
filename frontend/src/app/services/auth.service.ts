import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private apiUrl = 'http://127.0.0.1:8000/api';

  constructor(private http: HttpClient) {}

  register(user: any): Observable<any> {
    return this.http.post('${this.apiUrl}/register', user);
  }

  login(user: any): Observable<any> {
    return this.http.post('${this.apiUrl}/login', user);
  }

  logout(): Observable<any> {
    return this.http.post('${this.apiUrl}/logout', {}, {
      headers: { Authorization: 'Bearer ${this.getToken()}'}
    });
  }

  saveToken(token: string){
    localStorage.setItem('token', token);
  }

  getToken(): string | null {
    return localStorage.getItem('token');
  }
}
