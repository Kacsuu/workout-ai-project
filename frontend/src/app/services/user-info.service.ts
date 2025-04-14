import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserInfoService {
  private apiUrl = 'http://localhost:8000/user-info';

  constructor(private http: HttpClient) {}

  private getUserId(): string | null {
    return localStorage.getItem('userId');
  }

  getUserInfo(): Observable<any> {
    const id = this.getUserId();
    return this.http.get(`${this.apiUrl}/${id}`);
  }

  updateUserInfo(data: any): Observable<any> {
    const id = this.getUserId();
    return this.http.put(`${this.apiUrl}/${id}`, data);
  }

  deleteUserInfo(): Observable<any> {
    const id = this.getUserId();
    return this.http.delete(`${this.apiUrl}/${id}`);
  }

  createUserInfo(data: any): Observable<any> {
    return this.http.post(this.apiUrl, data);
  }
}
