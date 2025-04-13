import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { switchMap } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class UserInfoService {
  private apiUrl = 'http://localhost:8000';

  constructor(private http: HttpClient) {}

  private getCsrfToken(): Observable<any> {
    return this.http.get(`${this.apiUrl}/sanctum/csrf-cookie`, { withCredentials: true });
  }  

  getUserInfo(): Observable<any> {
    return this.http.get(`${this.apiUrl}/user-info`, { withCredentials: true });
  }
  
  saveUserInfo(data: any): Observable<any> {
    return this.getCsrfToken().pipe(
      switchMap(() =>
        this.http.post(`${this.apiUrl}/user-info`, data, { withCredentials: true })
      )
    );
  }
  
  deleteAccount(): Observable<any> {
    return this.getCsrfToken().pipe(
      switchMap(() =>
        this.http.delete(`${this.apiUrl}/user`, { withCredentials: true })
      )
    );
  }
}
