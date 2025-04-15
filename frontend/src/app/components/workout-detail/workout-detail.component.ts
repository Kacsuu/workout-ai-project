import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-workout-detail',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './workout-detail.component.html',
  styleUrls: ['./workout-detail.component.css']
})
export class WorkoutDetailComponent implements OnInit {
  workout: any;

  constructor(
    private route: ActivatedRoute,
    private http: HttpClient,
    private router: Router
  ) {}

  ngOnInit(): void {
    const workoutId = this.route.snapshot.paramMap.get('id');
    if (workoutId) {
      this.http.get<any>(`http://localhost:8000/workouts/${workoutId}`).subscribe(
        (data) => {
          this.workout = data; 
        },
        (error) => {
          console.error('Error geting workout', error);
        }
      );
    }
  }

  goBack() {
    this.router.navigate(['/workouts']);
  }
}
