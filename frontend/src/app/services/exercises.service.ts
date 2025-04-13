import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ExercisesService {
  private apiUrl = '/api/exercises';

  constructor(private http: HttpClient) {}

  getExercises(): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrl);
  }

  createExercise(exerciseData: any): Observable<any> {
    return this.http.post<any>(this.apiUrl, exerciseData);
  }
}
