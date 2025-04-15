import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, switchMap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private apiUrl = 'http://localhost:8000';

  constructor(private http: HttpClient) {}

  private getCsrfToken(): Observable<any> {
    return this.http.get(`${this.apiUrl}/sanctum/csrf-cookie`, { withCredentials: true });
  }

  getUserId(): string | null {
    return localStorage.getItem('userId');
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
            if (response.token) {
              localStorage.setItem('auth_token', response.token);
            }
            if (response.user?.id) {
              localStorage.setItem('userId', response.user.id);
              localStorage.setItem('name', response.user.name);
            }

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

    localStorage.removeItem('auth_token');
    localStorage.removeItem('userId');

    return this.http.post(`${this.apiUrl}/logout`, {}, { headers: httpHeaders });
  }

  deleteAccount(): Observable<any> {
    const id = this.getUserId();
    return this.http.delete(`${this.apiUrl}/user/${id}`);
  }

  getToken(): string | null {
    return localStorage.getItem('auth_token');
  }

  isLoggedIn(): boolean {
    return !!localStorage.getItem('auth_token');
  }
}
