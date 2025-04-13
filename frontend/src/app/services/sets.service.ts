import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SetsService {
  private apiUrl = '/sets';

  constructor(private http: HttpClient) {}

  createSet(setData: any): Observable<any> {
    return this.http.post<any>(this.apiUrl, setData);
  }

  getSets(): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrl);
  }
}
