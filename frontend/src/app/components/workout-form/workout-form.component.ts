import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { ExercisesService } from '../../services/exercises.service';

@Component({
  selector: 'app-workout-form',
  standalone: true,
  templateUrl: './workout-form.component.html',
  styleUrls: ['./workout-form.component.css'],
  imports: [FormsModule, CommonModule]
})
export class WorkoutFormComponent implements OnInit {
  workout = {
    title: '',
    start_time: '',
    finish_time: '',
    sets: [{ exercise_id: null, set_number: 1, repetitions: null, weight: null }]
  };

  exercises: Exercise[] = [];
  errorMessage = '';
  successMessage = '';

  constructor(private http: HttpClient, private router: Router, private exercisesService: ExercisesService) {}

  ngOnInit(): void {
    this.exercisesService.getExercises().subscribe({
      next: (data) => {
        this.exercises = data;
      },
      error: (err) => {
        console.error('Error fetching exercises', err);
      }
    });
  }

  addSet() {
    this.workout.sets.push({ exercise_id: null, set_number: this.workout.sets.length + 1, repetitions: null, weight: null });
  }

  removeSet(index: number) {
    this.workout.sets.splice(index, 1);
  }

  saveWorkout() {
    const workoutData = {
      title: this.workout.title,
      start_time: this.workout.start_time,
      finish_time: this.workout.finish_time,
      sets: this.workout.sets
    };

    this.http.post('/workouts', workoutData).subscribe({
      next: (response) => {
        this.successMessage = 'Workout saved successfully!';
        this.router.navigate(['/workout-list']);
      },
      error: (error) => {
        console.error('Error saving workout:', error);
        this.errorMessage = 'There was an error saving your workout.';
      }
    });
  }

  navigateBack() {
    this.router.navigate(['/workouts']);
  }
  
}

interface Exercise {
  id: number;
  exercise_name: string;
}
