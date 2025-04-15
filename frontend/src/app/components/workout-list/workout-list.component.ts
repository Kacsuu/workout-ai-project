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
  name: string = '';

  constructor(private http: HttpClient, private router: Router) {}

  ngOnInit() {
    this.name = localStorage.getItem('name')|| 'User';
    const userId = localStorage.getItem('userId');

    this.http.get<any[]>(`http://localhost:8000/workouts/user/${userId}`).subscribe(
      (data) => {
        this.workouts = data;
      },
      (error) => {
        console.error('Error fetching workouts:', error);
      }
    );
  }

  viewWorkout(workoutId: number) {
    this.router.navigate([`/workout/${workoutId}`]);
  }

  deleteWorkout(workoutId: number) {
    this.http.delete(`http://localhost:8000/workouts/${workoutId}`).subscribe({
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
