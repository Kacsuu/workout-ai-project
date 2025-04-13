import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class WorkoutSetService {
  private apiUrl = '/workouts_set';

  constructor(private http: HttpClient) {}

  createWorkoutSet(workoutSetData: any): Observable<any> {
    return this.http.post<any>(this.apiUrl, workoutSetData);
  }
}
