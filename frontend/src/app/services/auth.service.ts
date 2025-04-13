import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, switchMap } from 'rxjs';
import { HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private apiUrl = 'http://localhost:8000';

  constructor(private http: HttpClient) {}

  private getCsrfToken(): Observable<any> {
    return this.http.get(`${this.apiUrl}/sanctum/csrf-cookie`, { withCredentials: true });
  }

  register(user: any): Observable<any> {
    return this.getCsrfToken().pipe(
      switchMap(() =>
        this.http.post(`${this.apiUrl}/register`, user, { withCredentials: true })
      )
    );
  }

  login(credentials: any): Observable<any> {
    return this.getCsrfToken().pipe(
      switchMap(() =>
        this.http.post<any>(`${this.apiUrl}/login`, credentials).pipe(
          switchMap(response => {
            localStorage.setItem('auth_token', response.token);
            return [response];
          })
        )
      )
    );
  }
 
    logout(): Observable<any> {
      const token = localStorage.getItem('auth_token');
      const httpHeaders: HttpHeaders = new HttpHeaders({
        Authorization: `Bearer ${token}`
      });
      return this.http.post(`${this.apiUrl}/logout`, {}, { headers: httpHeaders });
    }
    
}
