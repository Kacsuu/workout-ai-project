import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-workout-list',
  templateUrl: './workout-list.component.html',
  styleUrls: ['./workout-list.component.css'],
  standalone: true,
  imports: [CommonModule],
})
export class WorkoutListComponent implements OnInit {
  workouts: any[] = [];

  constructor(private http: HttpClient, private router: Router) {}

  ngOnInit() {
    this.http.get<any[]>('/workouts').subscribe(
      (data) => {
        this.workouts = data;
      },
      (error) => {
        console.error('Error fetching workouts:', error);
      }
    );
  }

  viewWorkout(workoutId: number) {
    this.router.navigate([`/workout-detail/${workoutId}`]);
  }

  deleteWorkout(workoutId: number) {
    this.http.delete(`/workouts/${workoutId}`).subscribe({
      next: () => {
        this.workouts = this.workouts.filter(workout => workout.id !== workoutId);
      },
      error: (error) => {
        console.error('Error deleting workout:', error);
      }
    });
  }

  navigateToAddWorkout() {
    this.router.navigate(['/workouts/new']);
  }

  navigateToMyProfile() {
    this.router.navigate(['/profile']);
  }

  logout() {
    this.http.post('/logout', {}).subscribe({
      next: () => {
        localStorage.removeItem('token');
        this.router.navigate(['/login']);
      },
      error: (err) => {
        console.error('Logout failed', err);
        localStorage.removeItem('token');
        this.router.navigate(['/login']);
      }
    });
  }
  
}
