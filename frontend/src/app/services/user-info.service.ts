import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, switchMap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserInfoService {
  private apiUrl = 'http://127.0.0.1:8000';

  constructor(private http: HttpClient) {}

  private getCsrfToken(): Observable<any> {
    return this.http.get(`${this.apiUrl}/sanctum/csrf-cookie`, { withCredentials: true });
  }

  getUserInfo(): Observable<any> {
    return this.http.get(`${this.apiUrl}/api/user-info`, { withCredentials: true });
  }

  saveUserInfo(data: any): Observable<any> {
    return this.getCsrfToken().pipe(
      switchMap(() =>
        this.http.post(`${this.apiUrl}/api/user-info`, data, { withCredentials: true })
      )
    );
  }

  deleteAccount(): Observable<any> {
    return this.getCsrfToken().pipe(
      switchMap(() =>
        this.http.delete(`${this.apiUrl}/api/user`, { withCredentials: true })
      )
    );
  }
}
